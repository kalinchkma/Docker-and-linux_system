# python calculator
print("Welcome to Python simple calculator")
while True:
    i = input(">: ")
    if i == "exit":
        break
    print(eval(i))