import Foundation

@objc public class Settings: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
