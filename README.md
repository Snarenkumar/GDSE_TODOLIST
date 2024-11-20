# 📝 Django To-Do List Project

Welcome to the **Django To-Do List** project! This simple yet powerful application helps you manage your tasks and allocate time with ease.

I have placed the link to the hosted file below:  
**[Django To-Do List Hosted Link](https://narenkumar3098.pythonanywhere.com/)**  

> **Note:** If the website shows any errors, I have included a tutorial on how to install Django and execute Django code locally.

---

## 🌟 Project Overview

### Responsive Interface  
The project starts with an **index.html** file that is clean and responsive.

### Input Fields  
Two input fields are provided:  
- **Task**: To input the name of the task.  
- **Time**: To input the allocated time for the task.  

### Dynamic Display  
Once you input values, the task and time are displayed dynamically as a list (`<li>`) below the input fields.

### Export and Confirmation  
- Clicking the **Export** button redirects you to the next page, where:  
  - You'll be asked for confirmation.  
  - After confirming, you’ll be prompted to enter your email.  

### Email Summary  
Upon entering your email, you’ll receive a summary containing the tasks and their allocated times.

---

## 🚀 How to Run

1. Clone the repository and navigate to the project directory.  
2. Set up and run the project using Django.  
3. Open the project in your browser by navigating to `http://127.0.0.1:8000/`.  

---

## 🎮 Usage Instructions

### Task Management  
- Enter a task and its allocated time in the input fields.  
- The entered details are displayed dynamically as a list below.  

### Export and Confirmation  
- Click on the **Export** button to proceed to the next page.  
- Confirm the tasks and times listed.  

### Email Notification  
- Enter your email on the confirmation page.  
- Receive an email with the tasks and their allocated times.  

---

## 💡 Note  
If you encounter any issues, feel free to raise an issue or contribute to the project.

---

## 🛠️ Prerequisites  

Ensure you have the following installed:  
- **Python** (version 3.8 or higher)  
- **Django**  
- **MySQL**  

---

## 📦 How to Install

### Step 1: Clone the Repository  
```bash
git clone <your-repository-url>
cd <repository-folder>
'''

###Step 2: Create a Virtual Environment
bash
Copy code
python -m venv venv
Activate the virtual environment:

Windows: venv\Scripts\activate
Mac/Linux: source venv/bin/activate
Step 3: Install Django
bash
Copy code
pip install django
Step 4: Install Other Dependencies
Install MySQL connector and other necessary packages:

bash
Copy code
pip install mysqlclient
Step 5: Configure the Database
Update the settings.py file with your MySQL database credentials:

python
Copy code
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
Step 6: Run Migrations
bash
Copy code
python manage.py makemigrations
python manage.py migrate
Step 7: Run the Server
bash
Copy code
python manage.py runserver
🎮 How to Use
Open the browser and navigate to http://127.0.0.1:8000/.
You will see the responsive index.html file with:
Two input fields: Task and Time.
A dynamic list where added tasks are displayed.
Fill in the task details and click Add to see them in the list below.
Press Export to go to the next page for confirmation.
Enter your email after confirmation, and you'll receive the tasks and times in your inbox.
