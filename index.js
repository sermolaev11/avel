import UIKit

extension UITableViewController {
    /// Goes through visible cells and fits the detail (price) labels
    func fitDetailLabels() {
        // go through the list of visible cells
        for cell in tableView.visibleCells {
            fitDetailLabel(in: cell)
        }
    }
