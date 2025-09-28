FROM nginx:alpine
LABEL org.opencontainers.image.source <tu_repo_de_github>
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]