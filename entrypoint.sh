#! /bin/bash

python backend/manage.py makemigrations
python backend/manage.py migrate
npm run build --prefix ./frontend/
cd backend
python manage.py collectstatic --no-input
exec gunicorn backend.wsgi:application -b 0.0.0.0:8000 --reload
