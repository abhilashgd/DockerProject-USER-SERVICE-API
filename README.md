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
38. //selecting alpine image could be mentioned in Dockerfile. alpine image will be very light compared to latest
39. docker image ls
40. docker run --name user-api -d -p 3000:3000 user-service-api:latest
41. docker run --name website -d -p 8080:80  website:latest
42. //Tagging Images
43.  docker build -t abhilashgd-website:latest .
44. docker tag abhilashgd-website abhilashgd-website:1
45. docker build -t abhilashgd-website:latest .
46. docker tag abhilashgd-website:latest abhilashgd-website:2
47.  docker run --name abhilashgd-latest -d -p 8080:80  abhilashgd-website:latest  //http://localhost:8080/
48. docker run --name abhilashgd-2 -d -p 8081:80  abhilashgd-website:2 //http://localhost:8081/
49. docker run --name abhilashgd-1 -d -p 8082:80  abhilashgd-website:1 //http://localhost:8082/
50. docker ps

➜  DockerProjects git:(website) docker image ls
REPOSITORY           TAG       IMAGE ID       CREATED             SIZE
abhilashgd-website   2         bc309f2ca7e9   23 minutes ago      24.6MB
abhilashgd-website   latest    bc309f2ca7e9   23 minutes ago      24.6MB
user-service-api     latest    217442a12283   37 minutes ago      208MB
abhilashgd-website   1         399a186a61a7   About an hour ago   24.6MB
website              latest    399a186a61a7   About an hour ago   24.6MB
nginx                alpine    cc44224bfe20   2 days ago          23.5MB
