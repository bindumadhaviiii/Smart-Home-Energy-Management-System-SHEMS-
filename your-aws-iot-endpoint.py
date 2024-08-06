import time
import json
import random
import paho.mqtt.client as mqtt

# Replace this with your actual AWS IoT endpoint
AWS_IOT_ENDPOINT = "a2w48yo12vw8xh-ats.iot.us-west-2.amazonaws.com"

def generate_energy_data():
    return {
        'device_id': 'virtual_device_1',
        'timestamp': int(time.time()),
        'energy_consumption': round(random.uniform(0.5, 5.0), 2)
    }

mqtt_client = mqtt.Client()
mqtt_client.connect(AWS_IOT_ENDPOINT, 1883, 60)

while True:
    data = generate_energy_data()
    mqtt_client.publish("iot/topic", json.dumps(data))
    time.sleep(5)
