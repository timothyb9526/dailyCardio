# First Solution

while True:
    q = input("Pick a number: ")
    if int(q) > 0:
        for x in range(1, int(q)):
            if x % 2 == 0:
                print(str(x) + ": EVEN")
            else:
                print(str(x) + ": ODD")
    else:
        print("Number Must Be Positive!!!")
    break

# Second Solution
q2 = input("Pick another number: ")
while int(q2) > 0:
    for x in range(1, int(q2)):
        if x % 2 == 0:
            print(str(x) + ": EVEN")
        else:
            print(str(x) + ": ODD")
    break
