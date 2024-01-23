from os import system


# Define a list of commands 

commands = [
    'python3 -m venv env',
    'npm install ./frontend'
]


# Running the all command one-by-one

for command in commands:
    system(command)