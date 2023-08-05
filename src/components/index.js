const globalComponents = {
  install: function(app) {
    const components = import.meta.glob('/src/components/*/index.vue', { eager: true })
    console.log(components)
    console.log(app)
    for (const [, component] of Object.entries(components)) {
      console.log(component)
      app.component(component.default.name, component.default)
    }
  }
}

export default globalComponents
