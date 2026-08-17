// Leest de tekst die in een afbeelding staat, met de tekstherkenning die in
// macOS zelf zit. Gebruikt om te vinden welke beelden Nederlandse tekst
// bevatten en dus opnieuw gemaakt moeten worden voor de Engelse site.
import Foundation
import Vision
import AppKit

for pad in CommandLine.arguments.dropFirst() {
    guard let beeld = NSImage(contentsOfFile: pad),
          let cg = beeld.cgImage(forProposedRect: nil, context: nil, hints: nil) else { continue }
    let verzoek = VNRecognizeTextRequest()
    verzoek.recognitionLevel = .accurate
    verzoek.recognitionLanguages = ["nl-NL", "en-US"]
    verzoek.usesLanguageCorrection = true
    try? VNImageRequestHandler(cgImage: cg, options: [:]).perform([verzoek])
    let regels = (verzoek.results ?? []).compactMap { waarneming -> String? in
        guard let top = waarneming.topCandidates(1).first, top.confidence > 0.45 else { return nil }
        let t = top.string.trimmingCharacters(in: .whitespaces)
        return t.count >= 3 ? t : nil
    }
    if !regels.isEmpty {
        print("\(pad)\t\(regels.joined(separator: " | "))")
    }
}
