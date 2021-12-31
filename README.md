# DockerProjects

Docker Commands

1. Docker pull [IMAGE NAME]
2. Docker run -d [image name]:latest
    1. example: docker run -d nginx:latest
3. docker container ls
4. docker ps
5. docker stop [container id or name]
6. docker start[container id or name]
7. docker run -d -p 8080:80 nginx:latest
8. docker run -d -p 8080:80 -p 3000:80 nginx:latest
9. docker ps -a [lists all containers]
10. docker rm [container id or name]
11. docker ps -aq
12. docker rm $(docker ps -aq) [deletes all containers]
13. docker run --name website -d -p 8080:80 -p 3000:80 nginx:latest
14.  docker run --name website-two  -d -p 9000:80 nginx:latest
15. docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
16. export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
17. docker ps —format=$FORMAT
18. docker run --name website -v $(pwd) -d -p 8080:80 nginx:latest //inside desktop.website folder with index.html file
19. docker exec -it website bash //to enter container
20. docker rm -f website
21. //https://startbootstrap.com/themes/landing-pages for downloading themes
22. docker run --name website-copy --volumes-from website -d -p 8081:80 nginx
23. https://docs.docker.com/engine/reference/builder/
24. //Dockerfile inside website folder
25. //dockerfile contents[ FROM nginx:latest ADD . /usr/share/nginx/html]
26. docker build --tag website:latest .
27. https://nodejs.org/en/download/
28. https://expressjs.com/
29. //expressjs getting started installing
30. https://expressjs.com/en/starter/installing.html
31. 31. docker image rm [image ID]
32. docker image ls
33. docker build -t website:latest .
34. docker build -t  user-service-api:latest .
35. docker pull node:alpine
36.  docker pull nginx:alpine
37. //selecting alpine image could be mentioned in Dockerfile. alpine image will be very light compared to latest


