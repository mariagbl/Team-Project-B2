import csv
#trying to use this code to format existing CSV for JSON file
with open('No Hidden Cells_Adapted_for_D3.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(['col1', 'col2', 'col3'])
    writer.writerow(['val1', 'val2', 'val3'])
    writer.writerow(['val1', 'val2', 'val3'])
    writer.writerow(['val1', 'val2', 'val3'])

reader = csv.DictReader(f)
rows = [dict(row) for row in reader] # Convert Ordered Dict to regular dict (python 3.6 or higher)

print(rows)