import json
import os

CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.json")

with open(CONFIG_PATH, "r") as f:
    config = json.load(f)

APP_CONFIG = config["app"]
DB_CONFIG = config["database"]
SECURITY_CONFIG = config["security"]
