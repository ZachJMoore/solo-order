from utils.index import addNumbers


def fibonacci():
  a, b = 0, 1
  while True:
    yield a
    a, b = b, a + b


fibNumbers = fibonacci()
fibRange = []
for i in range(10):
  fibRange.append(next(fibNumbers))

class Pet:
  def __init__(self, name, favoriteNumber):
    self._name = name
    self._favoriteNumber = favoriteNumber

  def name(self):
    return self._name

  def favoriteNumber(self):
    return self._favoriteNumber


pets = []
for index, number in enumerate(fibRange):
  pets.append(Pet("Pet " + str(index), number))

for pet in pets:
  print(pet.name() + " has a favorite number of " + str(pet.favoriteNumber()))


print(addNumbers(390, "610"))