from flask import Flask, request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data_base = [{"id": 1, "task":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, possimus."}]

@app.route("/", methods=["GET"])
def get():
    return make_response(
        jsonify(
            mensagem = "data to do list",
            dados = data_base
        )
    )

@app.route("/", methods=["POST"])
def post():
    new_task = request.json
    if new_task:
        data_base.append(new_task)
        return make_response(
            jsonify({
                "status" : "created new task"
            })
        )

@app.route("/", methods=["PUT"])
def update():
    update_task = request.json
    for task in data_base:
        if update_task["id"] == task["id"]:
            task["task"] = update_task["task"]
            return make_response(
                jsonify("update task")
            )


@app.route("/", methods=["DELETE"])
def delete_task():
    selected_task = request.json
    for task in data_base:
        if selected_task["id"] == task["id"]:
            data_base.remove(task)
            return make_response(
                jsonify("item deletado")
            )

app.run()