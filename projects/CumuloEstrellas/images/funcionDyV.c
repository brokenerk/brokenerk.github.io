funcion divide_y_venceras(problema)
{
   si el problema es trivial
      entonces resolver el problema;
   si no es trivial
   {
      descomponer el problema en n subproblemas más pequeños;
      para i=1 hasta n hacer
         divide_y_venceras(subproblema_k);
      combinar las n soluciones;
    }
 }