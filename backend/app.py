from flask import Flask, jsonify
from flask_cors import CORS

from api.api import api, Player
from api.models import db
from api.config import Config


def create_app(config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config)
    register_extensions(app)
    return app


def register_extensions(app):
    api.init_app(app)
    db.init_app(app)


app = create_app(Config)


@app.route('/', methods=['GET'])
def root():
    player = Player()
    return player.get(), 200


if __name__ == '__main__':
    app = create_app(Config)
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)