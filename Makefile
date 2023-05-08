build:
	docker build -t crop_front .

run:
	docker run -d -p 3000:3000 --name crop_front --rm crop_front

stop:
	docker stop crop_front