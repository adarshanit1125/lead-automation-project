function processLead() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const row = sheet.getLastRow();
  if (row == 1) return;

  const input = sheet.getRange(row, 2).getValue().toLowerCase();

  // Budget (better)
  let budgetMatch = input.match(/(\d+\s?(lakh|lac|cr|crore))/i);
  let budget = budgetMatch ? budgetMatch[0] : "N/A";

  // Location (better)
  let locationMatch = input.match(/in\s([a-z\s]+)/i);
let location = "N/A";

if (locationMatch) {
  location = locationMatch[1].replace(/under.*/i, "").trim();
}

  // Requirement
  let requirement = input.includes("2bhk") ? "2BHK" :
                    input.includes("3bhk") ? "3BHK" : "General";

  // Output
  sheet.getRange(row, 3).setValue(budget);
  sheet.getRange(row, 4).setValue(location);
  sheet.getRange(row, 5).setValue(requirement);
  sheet.getRange(row, 6).setValue("Follow-up call");
}
