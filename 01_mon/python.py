# First Solution
q = input("Pick a number: ")
x = 0
while x != int(q) and int(q) > 0:
    x += 1
    if x % 2 == 0:
        print(str(x) + ": even")
    else:
        print(str(x) + ": odd")

# Second Solution
q2 = input("Pick another number: ")
for x in range(1, int(q2)):
    if x % 2 == 0:
        print(str(x) + ": even")
    else:
        print(str(x) + ": odd")
