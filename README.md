# Creación de microfrontales y federación de módulos

- He creado tres microfrontales: host, header y footer.
- Utlizando la librería Lit he creado una web component con el nombre menu-global. El componente tiene dos atributos: color   (string - para el color de texto), vertical (boleano - para la dirección del menú).
- Este componente lo reutilizo tanto en el header como en el del footer. Ambos son web component desarrollados con Lit.
a fecha la he configurado utilizando la librería moment.
- En la webpack.config de header y footer en el plugin ModuleFederationPlugin he configurado exposes y shared para la         federación y para compartir la librería moment.
- En el webpack.config de host he configurado los remotes para la federación y shared para la librería moment.
# qualentum-paso-paso-microfrontales
