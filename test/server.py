import globalValue
import time, random, threading
def get():
    while True:
        time.sleep(0.1)
        # if globalValue.QUEUE.empty():
        #     break
        # else:
        print globalValue.QUEUE.get()

def put():
    while True:
        num = random.random()
        # print num
        time.sleep(0.1)
        globalValue.QUEUE.put(num)

t1 = threading.Thread(target=put)
t2 = threading.Thread(target=get)
t1.start()
t2.start()
