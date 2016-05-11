import globalValue,random,time
while True:
    num = random.random()
    print num
    time.sleep(0.1)
    globalValue.QUEUE.put(num)
