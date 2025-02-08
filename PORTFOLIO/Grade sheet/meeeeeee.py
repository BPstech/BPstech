import os
import requests

def download_gradesheet(admn_no):
    url = "https://parent.iitism.ac.in/index.php/parent_portal/grade_sheet/print_grade_report/0/B.TECH"
    data = {"admn_no": admn_no}

    try:
        response = requests.post(url, data=data)
        response.raise_for_status()  

        file_path = os.path.join("downloads", f"Gradesheet_{admn_no}.pdf")

        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        with open(file_path, "wb") as pdf_file:
            pdf_file.write(response.content)

        print(f"Gradesheet downloaded successfully to: {file_path}")

        os.system(file_path)

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")



download_gradesheet("23JE0357")