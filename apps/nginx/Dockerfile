FROM nginx

RUN rm -rf /etc/nginx/conf.d/

COPY prod.conf.d /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

