import time

from utils.index import addNumbers

runCount = 0

while True:
  runCount += 1

  print(addNumbers(runCount, runCount))

  
  time.sleep(10)