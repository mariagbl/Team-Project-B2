import json
from pprint import pprint
# read csv
import csv

with open('data/Back_end_data_edited_for_graph/No Hidden Cells_Adapted_for_D3.csv', 'r') as f:
    reader = csv.DictReader(f)
    rows = [dict(row) for row in reader] # Convert Ordered Dict to regular dict (python 3.6 or higher)

pprint(rows)
# write json
with open('US3_data.json', 'w') as f:
    json.dump(rows, f,indent=2)