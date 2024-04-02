Desarrollar un servicio web REST para manipular los siguientes recursos relacionados con un sistema de control de activos:
  Activos,
  Ubicaciones,
  Responsables,

Cada Activo puede tener solo un Responsable.
Un Responsable puede tener la custodia de muchos Activos.
Una Ubicación puede tener muchos Activos

Los atributos a considerar son los siguientes:

Activo:
  Id del activo,
  Número de serie,
  Número de inventario UABC,
  Tipo de activo (computadora, mobiliario, equipo electrónico, etc.),
  Descripción,
  Ubicación,
  Responsable,
  Imagen asociada al activo

Ubicación:
  Id de la ubicación,
  Descripción,
  Activos asociados,
  Imagen de la Ubicación

Responsable:
  Id del responsable,
  Número de empleado,
  Nombre,
  Activos en custodia,
  Imagen del Responsable
