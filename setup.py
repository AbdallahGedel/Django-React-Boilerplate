from os import system


# Define a list of commands 

commands = [
    'python3 -m venv env',
    'npm install ./frontend',
    'python3 manage.py makemigrations',
    'python3 managet.py migrate',
]


# Running the all command one-by-one

for command in commands:
    system(command)