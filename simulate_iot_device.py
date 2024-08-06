import boto3
import json
import time

# Initialize IoT client
iot = boto3.client('iot-data', region_name='us-east-1')

# Simulate IoT data
payload = {
    'device_id': 'device_1',
    'timestamp': int(time.time()),
    'energy_consumption': 10.5
}

response = iot.publish(
    topic='iot/topic',
    qos=1,
    payload=json.dumps(payload)
)

print('Message published:', response)
