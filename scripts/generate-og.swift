import AppKit
import Foundation

let outputPath = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "public/og-image.png"
let width = 1200
let height = 630
let scale: CGFloat = 1
let image = NSImage(size: NSSize(width: width, height: height))

func drawText(_ text: String, x: CGFloat, y: CGFloat, size: CGFloat, weight: NSFont.Weight, color: NSColor) {
  let paragraph = NSMutableParagraphStyle()
  paragraph.alignment = .center
  let attrs: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: size, weight: weight),
    .foregroundColor: color,
    .paragraphStyle: paragraph,
  ]
  let rect = NSRect(x: x, y: y, width: CGFloat(width) - x * 2, height: size * 1.5)
  (text as NSString).draw(in: rect, withAttributes: attrs)
}

image.lockFocus()
let context = NSGraphicsContext.current!.cgContext
context.scaleBy(x: scale, y: scale)

let background = NSGradient(colors: [
  NSColor(calibratedRed: 0.02, green: 0.06, blue: 0.12, alpha: 1),
  NSColor(calibratedRed: 0.03, green: 0.32, blue: 0.52, alpha: 1),
])!
background.draw(in: NSRect(x: 0, y: 0, width: width, height: height), angle: -28)

NSColor(calibratedRed: 0.88, green: 0.96, blue: 1, alpha: 0.12).setFill()
NSBezierPath(roundedRect: NSRect(x: 70, y: 70, width: 1060, height: 490), xRadius: 36, yRadius: 36).fill()

NSColor(calibratedRed: 0.49, green: 0.83, blue: 1, alpha: 0.28).setStroke()
let border = NSBezierPath(roundedRect: NSRect(x: 70, y: 70, width: 1060, height: 490), xRadius: 36, yRadius: 36)
border.lineWidth = 2
border.stroke()

drawText("하상원 포트폴리오", x: 90, y: 320, size: 92, weight: .black, color: .white)
drawText("Frontend Developer", x: 90, y: 245, size: 38, weight: .bold, color: NSColor(calibratedRed: 0.73, green: 0.9, blue: 1, alpha: 1))

image.unlockFocus()

guard
  let tiff = image.tiffRepresentation,
  let bitmap = NSBitmapImageRep(data: tiff),
  let png = bitmap.representation(using: .png, properties: [:])
else {
  fatalError("Failed to render OG image")
}

try png.write(to: URL(fileURLWithPath: outputPath))
