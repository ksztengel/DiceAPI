# DiceAPI
![screen shot 2017-04-01 at 7 52 40 am](https://cloud.githubusercontent.com/assets/19519598/24579340/75a5fd8c-16b0-11e7-9ddf-f7b7d75d8523.png)

Requirements
The goal of this challenge is to create a fully functional Dice API. The challenge can be solved with any technology, provided that its deployment is easy to replicate and to test. The code should not be obfuscated.

Specifications
The game should be implemented as a server component and a client component with network-based communication.

Server is responsible for:
# ● Parsing the Dice Syntax provided below
# ● Rolling the Dice and produce a single final value
# ● Rolling the Dice and produce a single final value
# ● Exposing a Rest API to be used by the client
# ● BONUS POINT: return the evaluation for each step of the expression and display

# Client is responsible for:
# ● Allow input of arbitrary Dice Expression as described below
# ● Send a request to the server and get back a response for the input expression
# ● Display the result of the expression
# ● Display error messages in a relevant way
# ● BONUS POINT: support sums and subtractions of Dice Expressions
# ● BONUS POINT: display a small graph of the probabilities for the input expression

# Dice Expression
# ● One die roll .  d X : where  X  is any positive number. Roll 1    die with X    sides, eg:  d6  (results between 1 and 6 included)

# ● Dice roll .  N d X : where  N  is any positive number. Roll N    dice with  X  sides and sum, eg: 3d6  (results between 3 and 18 included)
# ● Drop lowest rolls .  N d X d D : where  D  is any positive number lower than N   . Roll  N  dice with X  sides and drop the lowest  D  and sum, eg: 5  d6d2  (results between 3 and 18 included)
# ● Keep highest rolls .  N d X k K : where  K  is any positive number lower than N   . Roll  N  dice with  X  sides and keep the highest K    and sum, eg: 5  d6k2  (results between 2 and 12 included)
# ● Explosive roll .  N d X x E : where  E  is any positive number equal or smaller than X   . Roll  N dice with  X  sides. For each value that is equal or greater than E    roll again until no values need to be re-rolled. Sum all the rolled dice. Eg:  4d6x6  (results between 4 and infinity).
# ● Literal value.  X : where  X  is any positive number, eg: 2    (result is always 2) Dice Expressions
# ● 3d6 : evaluated to  1d6 + 1d6 + 1d6 = 12

# ● BONUS POINT:  3d6 + 2 : evaluated to 1  d6 + 1d6 + 1d6 + 2
# ● 4d8d1 : evaluated to  (1d8 + 1d8 + 1d8  + 1d8 )  discarding the lowest die (not necessarily the last one).
# ● BONUS POINT:  4d8d1 - 1d4 : evaluated to (  1d8 + 1d8 + 1d8  + 1d8 ) - 1d4

Details
# ● Please make the code and all accessory assets available by zipping them.
# ● Use only original code for the core of the assignment.
# ● You can use any library for DOM manipulation, server side integration, client/server communication, serialization ...
