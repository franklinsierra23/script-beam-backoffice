export interface EventsDTO {
  id?: string; // Opcional, porque Firestore lo agrega al leer
  descripcion: string;
  fecha: string; // Puedes usar Date si prefieres, pero Firestore suele manejar string o Timestamp
  titulo: string;
  ubicacion: string;
}
