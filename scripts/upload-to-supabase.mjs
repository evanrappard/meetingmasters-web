import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dir, '../public/images')

const supabase = createClient(
  'https://mgkzogvgqpfvsynrfera.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1na3pvZ3ZncXBmdnN5bnJmZXJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODI0MTY5NSwiZXhwIjoyMDkzODE3Njk1fQ.bT1IqTy3aE4q-8_BxtjejlSijGt-B2fEstgYcf6A9y8'
)

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

    const { data, error } = await supabase.storage
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
