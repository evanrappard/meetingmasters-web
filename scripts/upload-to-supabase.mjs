import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

config({ path: new URL('../.env.local', import.meta.url).pathname })

const __dir = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dir, '../public/images')

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(url, key)

const BUCKET = 'assets'

async function run() {
  // Create bucket if it doesn't exist
  const { error: bucketErr } = await supabase.storage.createBucket(BUCKET, {
    public: true,
    fileSizeLimit: 10485760, // 10MB
  })
  if (bucketErr && !bucketErr.message.includes('already exists')) {
    console.error('Bucket error:', bucketErr.message)
    process.exit(1)
  }
  console.log(`Bucket "${BUCKET}" ready.\n`)

  const files = readdirSync(IMAGES_DIR)
  const results = []

  for (const file of files) {
    const filePath = join(IMAGES_DIR, file)
    const content = readFileSync(filePath)
    const mime = file.endsWith('.png') ? 'image/png' : 'image/jpeg'

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(file, content, { contentType: mime, upsert: true })

    if (error) {
      console.error(`  ✗ ${file}: ${error.message}`)
    } else {
      const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(file)
      console.log(`  ✓ ${file}`)
      results.push({ file, url: urlData.publicUrl })
    }
  }

  console.log('\n--- Public URLs ---')
  for (const r of results) {
    console.log(`${r.file}: ${r.url}`)
  }
}

run()
