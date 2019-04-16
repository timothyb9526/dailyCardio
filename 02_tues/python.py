# First Solution
q = input("Pick a number: ")
x = 1
while x != int(q) and int(q) > 0:
    x += 1
    if int(q) % x == 0:
        print(str(x) + ": is a factor of " + q)
    else:
        print(str(x) + ": is not a factor of " + q)

# Second Solution
q2 = input("Pick another number: ")
for x in range(1, int(q2)):
    if int(q2) % x == 0:
        print(str(x) + ": is a factor of " + q2)
    else:
        print(str(x) + ": is not a factor of " + q2)
