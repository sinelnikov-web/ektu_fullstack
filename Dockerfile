FROM nikolaik/python-nodejs:python3.8-nodejs16

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

COPY requirements.txt .
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
RUN pip install -r requirements.txt


COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]


