// Herstelt twee fouten op pagina 2 van de SpatialChat-handleidingen.
//
//   swift scripts/handleiding-spatialchat-herstel.swift nl
//   swift scripts/handleiding-spatialchat-herstel.swift en
//
// Wat er mis was:
//
//   1. Het woordmerk "SpatialChat" in de gele balk bovenaan pagina 2 valt
//      uiteen in losse stippen. In de pdf staat het logo als afbeelding met
//      een transparantiemasker, en dat masker is stuk: het laat alleen de
//      puntjes van de i's door. Dat zit zo in het bronbestand en is niet met
//      een andere pdf-lezer op te lossen. We leggen er het echte logo overheen
//      (public/images/logos/tools/spatialchat.webp).
//
//   2. Alleen in het Nederlands: de avatar met de megafoon staat zo laag in
//      het kader dat de onderkant wegvalt. De afbeelding ín de pdf is zelf al
//      afgesneden — de onderkant van de cirkel zit er niet in — dus die kon
//      niet omhoog geschoven worden. In de plaats komt de complete avatar uit
//      de Engelse handleiding, kleiner en hoger, zodat hij heel in beeld staat.
//
// Het origineel blijft staan; het script schrijft een nieuw bestand.
// Maten zijn in punten, gemeten op een render van de bronpagina.

import Foundation
import CoreGraphics
import AppKit

struct Vlak { let x, yBoven, breedte, hoogte: CGFloat; let kleur: [CGFloat] }
struct Beeld { let pad: String; let x, yBoven, breedte, hoogte: CGFloat }

/// Kleuren in device-RGB, net als in de bron-pdf. Via een CGColor met een
/// generieke kleurruimte komt er een iets lichtere tint uit, en dan zie je de
/// rand van het vlak in de gele balk staan.
func kleur(_ r: Int, _ g: Int, _ b: Int) -> [CGFloat] {
  [CGFloat(r)/255, CGFloat(g)/255, CGFloat(b)/255, 1]
}
let deviceRGB = CGColorSpaceCreateDeviceRGB()

let taal = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "nl"
let map = FileManager.default.currentDirectoryPath

let bron: String
let doel: String
let logo = "\(map)/scripts/_pdf-herstel/spatialchat-logo.png"
let avatar = "\(map)/scripts/_pdf-herstel/megafoon-avatar.png"
var vlakken: [Vlak] = []
var beelden: [Beeld] = []

// De gele balk waarin het logo staat, en de kaartrand onderaan de megafoonkaart.
let balkGeel = kleur(255, 236, 192)
let wit = kleur(255, 255, 255)
let kaartRand = kleur(255, 248, 218)

if taal == "en" {
  bron = "\(map)/public/downloads/en/spatialchat-participant-instructions.pdf"
  doel = "\(map)/public/downloads/en/spatialchat-participant-instructions-v2.pdf"
  vlakken = [Vlak(x: 46, yBoven: 29.5, breedte: 170, hoogte: 43, kleur: balkGeel)]
  beelden = [Beeld(pad: logo, x: 48.7, yBoven: 32.25, breedte: 158.6, hoogte: 35.5)]
} else {
  bron = "\(map)/public/downloads/spatialchat-instructies-deelnemer.pdf"
  doel = "\(map)/public/downloads/spatialchat-instructies-deelnemer-v2.pdf"
  vlakken = [
    Vlak(x: 20, yBoven: 57, breedte: 170, hoogte: 42.5, kleur: balkGeel),
    // De afgesneden avatar wegwerken, en daarna de kaartrand weer doortrekken.
    Vlak(x: 346, yBoven: 470, breedte: 115, hoogte: 70, kleur: wit),
    Vlak(x: 346, yBoven: 529.6, breedte: 115, hoogte: 1.3, kleur: kaartRand),
  ]
  beelden = [
    Beeld(pad: logo, x: 22.4, yBoven: 58.5, breedte: 160.6, hoogte: 36),
    Beeld(pad: avatar, x: 356, yBoven: 466, breedte: 59.3, hoogte: 60),
  ]
}

guard let doc = CGPDFDocument(URL(fileURLWithPath: bron) as CFURL) else {
  print("kan de bron-pdf niet openen: \(bron)"); exit(1)
}
guard let eerste = doc.page(at: 1) else { exit(1) }
var kader = eerste.getBoxRect(.mediaBox)

guard let ctx = CGContext(URL(fileURLWithPath: doel) as CFURL, mediaBox: &kader, nil) else {
  print("kan niet schrijven naar \(doel)"); exit(1)
}

func laadBeeld(_ pad: String) -> CGImage? {
  guard let data = NSData(contentsOfFile: pad),
        let bron = CGImageSourceCreateWithData(data, nil) else { return nil }
  return CGImageSourceCreateImageAtIndex(bron, 0, nil)
}

for nr in 1...doc.numberOfPages {
  guard let pagina = doc.page(at: nr) else { continue }
  var vak = pagina.getBoxRect(.mediaBox)
  ctx.beginPage(mediaBox: &vak)
  ctx.drawPDFPage(pagina)

  // Alleen pagina 2 heeft herstel nodig.
  if nr == 2 {
    let H = vak.height
    for v in vlakken {
      ctx.setFillColorSpace(deviceRGB)
      ctx.setFillColor(v.kleur)
      ctx.fill(CGRect(x: v.x, y: H - v.yBoven - v.hoogte, width: v.breedte, height: v.hoogte))
    }
    for b in beelden {
      guard let img = laadBeeld(b.pad) else { print("beeld ontbreekt: \(b.pad)"); continue }
      ctx.draw(img, in: CGRect(x: b.x, y: H - b.yBoven - b.hoogte, width: b.breedte, height: b.hoogte))
    }
  }
  ctx.endPage()
}
ctx.closePDF()
print("geschreven: \(doel)")
