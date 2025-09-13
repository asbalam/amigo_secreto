# Ejemplos de SQL en Markdown

## SELECT
```sql
-- Seleccionar todos los usuarios activos
SELECT id, nombre, email
FROM usuarios
WHERE estado = 'activo'
ORDER BY nombre ASC;
