import time

from utils.index import addNumbers


class Pet:
  def __init__(self, name, favoriteNumber):
    self._name = name
    self._favoriteNumber = favoriteNumber

  def name(self):
    return self._name

  def favoriteNumber(self):
    return self._favoriteNumber


def fibonacci():
  a, b = 0, 1
  while True:
    yield a
    a, b = b, a + b

runCount = 0
while True:

  print(addNumbers(runCount, "1"))
  


  fibNumbers = fibonacci()
  fibRange = []
  for i in range(10):
    fibRange.append(next(fibNumbers))



  pets = []
  for index, number in enumerate(fibRange):
    pets.append(Pet("Pet " + str(index), number))

  for pet in pets:
    print(pet.name() + " has a favorite number of " + str(pet.favoriteNumber()))



  runCount += 1
  time.sleep(10)