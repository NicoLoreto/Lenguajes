### MODULO 2

#print ('hola')

La palabra print que puedes ver aquí es el nombre de una función. Eso no significa que dondequiera que aparezca esta palabra, será siempre el nombre de una función. 
El significado de la palabra proviene del contexto en el cual se haya utilizado la palabra.

Una función (en este contexto) es una parte separada del código de computadora el cual es capaz de:

Causar algún efecto (por ejemplo, enviar texto a la terminal, crear un archivo, dibujar una imagen, reproducir un sonido, etc.); esto es algo completamente inaudito en el mundo de las matemáticas.
Evaluar un valor (por ejemplo, la raíz cuadrada de un valor o la longitud de un texto dado) y devolverlo como el resultado de la función; esto es lo que hace que las funciones de Python sean parientes de los conceptos matemáticos.

Pueden venir de Python mismo. La función print es una de este tipo; dicha función es un valor agregado de Python junto con su entorno (está integrada); no tienes que hacer nada especial (por ejemplo, pedirle a alguien algo) si quieres usarla.

Pueden provenir de uno o varios de los módulos de Python llamados complementos; algunos de los módulos vienen con Python, otros pueden requerir una instalación por separado, cual sea el caso, todos deben estar conectados explícitamente con el código (te mostraremos cómo hacer esto pronto).

Puedes escribirlas tú mismo, colocando tantas funciones como desees y necesites dentro de su programa para hacerlo más simple, claro y elegante.

El nombre de la función debe ser significativo (el nombre de la función print es evidente), imprime en la terminal.

una función puede tener:

Un efecto.
Un resultado.
También existe un tercer componente de la función, muy importante, el o los argumento(s).

Pueden aceptar cualquier número de argumentos, tantos como sea necesario para realizar sus tareas. Nota: algunas funciones de Python no necesitan ningún argumento.

A pesar del número de argumentos necesarios o proporcionados, las funciones de Python demandan fuertemente la presencia de un par de paréntesis - el de apertura y de cierre, respectivamente. Si tienen argumentos van dentro delos (), sino vacios.

para distinguir las palabras comunes de los nombres de funciones, coloca un par de paréntesis vacíos después de sus nombres, incluso si la función correspondiente requiere uno o más argumentos. Esta es una medida estándar.

La función de la que estamos hablando aquí es print().

las comillas significan algo así: el texto entre nosotros no es un código. No está diseñado para ser ejecutado, y se debe tomar tal como está.

El nombre de la función (print en este caso) junto con los paréntesis y los argumentos, forman la invocación de la función.

Python requiere que no haya más de una instrucción por línea.

Nota: Python hace una excepción a esta regla: permite que una instrucción se extienda por más de una línea (lo que puede ser útil cuando el código contiene construcciones complejas).

La barra invertida (\) tiene un significado muy especial cuando se usa dentro de las cadenas, es llamado el carácter de escape.

La palabra escape debe entenderse claramente: significa que la serie de caracteres en la cadena se escapa (detiene) por un momento (un momento muy corto) para introducir una inclusión especial.

La letra n colocada después de la barra invertida proviene de la palabra newline (nueva línea).

Tanto la barra diagonal inversa como la n forman un símbolo especial denominado carácter de nueva línea (newline character), que incita a la consola a iniciar una nueva línea de salida.

Los argumentos de palabra clave. El nombre se deriva del hecho de que el significado de estos argumentos no se toma de su ubicación (posición) sino de la palabra especial (palabra clave) utilizada para identificarlos.

Un argumento de palabra clave consta de tres elementos: una palabra clave que identifica el argumento (end - termina aquí); un signo de igual (=); y un valor asignado a ese argumento.
Cualquier argumento de palabra clave debe ponerse después del último argumento posicional (esto es muy importante).

En nuestro ejemplo, hemos utilizado el argumento de palabra clave end y lo hemos igualado a una cadena que contiene un espacio.

print("Mi nombre es", "Python.", end=" ")
print("Monty Python.")

Como puedes ver, el argumento de palabra clave end determina los caracteres que la función print() envía a la salida una vez que llega al final de sus argumentos posicionales.

El comportamiento predeterminado refleja la situación en la que el argumento de la palabra clave end se usa implícitamente de la siguiente manera: end="\n".

Se estableció anteriormente que la función print() separa los argumentos generados con espacios. Este comportamiento también puede ser cambiado.

El argumento de palabra clave que puede hacer esto se denomina sep (separador).

Observa el código en el editor y ejecútalo.

El argumento sep entrega el siguiente resultado:

Mi-nombre-es-Monty-Python.
salida

La función print() ahora utiliza un guion, en lugar de un espacio, para separar los argumentos generados.

Nota: el valor del argumento sep también puede ser una cadena vacía. Pruébalo tu mismo.

print("Mi", "nombre", "es", sep="_", end="*")
print("Monty", "Python.", sep="*", end="*\n")

Mi_nombre_es*Monty*Python.*

print("    *")
print("   * *")
print("  *   *")
print(" *     *")
print("***   ***")
print("  *   *")
print("  *   *")
print("  *****")

Puntos Clave
1. La función print() es una función integrada imprime/envía un mensaje específico a la pantalla/ventana de consola.

2. Las funciones integradas, al contrario de las funciones definidas por el usuario, están siempre disponibles y no tienen que ser importadas. Python 3.7.1 viene con 69 funciones incorporadas. Puedes encontrar su lista completa en orden alfabético en Python Standard Library.

3. Para llamar a una función (invocación de función), debe utilizarse el nombre de la función seguido de un paréntesis. Puedes pasar argumentos a una función colocándolos dentro de los paréntesis. Se Deben separar los argumentos con una coma, por ejemplo, print("¡Hola,", "Mundo!"). una función print() "vacía" imprime una línea vacía a la pantalla.

4. Las cadenas de Python están delimitadas por comillas, por ejemplo, "Soy una cadena", o 'Yo soy una cadena, también'.

5. Los programas de computadora son colecciones de instrucciones. Una instrucción es un comando para realizar una tarea específica cuando se ejecuta, por ejemplo, para imprimir un determinado mensaje en la pantalla.

6. En las cadenas de Python, la barra diagonal inversa (\) es un carácter especial que anuncia que el siguiente carácter tiene un significado diferente, por ejemplo, \n (el carácter de nueva línea) comienza una nueva línea de salida.

7. Los argumentos posicionales son aquellos cuyo significado viene dictado por su posición, por ejemplo, el segundo argumento se emite después del primero, el tercero se emite después del segundo, etc.

8. Los argumentos de palabra clave son aquellos cuyo significado no está dictado por su ubicación, sino por una palabra especial (palabra clave) que se utiliza para identificarlos.

9. Los parámetros end y sep se pueden usar para dar formato la salida de la función print(). El parámetro sep especifica el separador entre los argumentos emitidos (por ejemplo, print("H", "E", "L", "L", "O", sep="-"), mientras que el parámetro end especifica que imprimir al final de la declaración de impresión.

#LITERALES

Un literal se refiere a datos cuyos valores están determinados por el literal mismo.

Observa los siguientes dígitos:

123

¿Puedes adivinar qué valor representa? Claro que puedes - es ciento veintitrés.

Que tal este:

c

¿Representa algún valor? Tal vez. Puede ser el símbolo de la velocidad de la luz, por ejemplo. También puede representar la constante de integración. Incluso la longitud de una hipotenusa en el Teorema de Pitágoras. Existen muchas posibilidades.

No se puede elegir el valor correcto sin algo de conocimiento adicional.

Y esta es la pista: 123 es un literal, y c no lo es.

Se utilizan literales para codificar datos y ponerlos dentro del código.

Todos los números manejados por las computadoras modernas son de dos tipos:

Enteros, es decir, aquellos que no tienen una parte fraccionaria.
Y números punto-flotantes (o simplemente flotantes), los cuales contienen (o son capaces de contener) una parte fraccionaría.

La característica del valor numérico que determina el tipo, rango y aplicación se denomina el tipo.

El uso de guion bajo en los literales numéricos.

El número se puede escribir ya sea así: 11111111, o como sigue: 11_111_111.

¿Cómo se codifican los números negativos en Python? Como normalmente se hace, agregando un signo de menos. Se puede escribir: -11111111, o -11_111_111.

Enteros: números octales y hexadecimales

Existen dos convenciones adicionales en Python que no son conocidas en el mundo de las matemáticas. El primero nos permite utilizar un número en su representación octal.

Si un número entero esta precedido por un código 0O o 0o (cero-o), el número será tratado como un valor octal. Esto significa que el número debe contener dígitos en el rango del [0..7] únicamente.

0o123 es un número octal con un valor (decimal) igual a 83.

La segunda convención nos permite utilizar números en hexadecimal. Dichos números deben ser precedidos por el prefijo 0x o 0X (cero-x).

0x123 es un número hexadecimal con un valor (decimal) igual a 291

Flotantes

Ahora es tiempo de hablar acerca de otro tipo, el cual esta designado para representar y almacenar los números que (como lo diría un matemático) tienen una parte decimal no vacía.

Son números que tienen (o pueden tener) una parte fraccionaria después del punto decimal.
Si se quiere utilizar solo el valor de dos punto cinco, se debe escribir como se mostró anteriormente. Nota que hay un punto entre el 2 y el 5, no una coma.

Como puedes imaginar, el valor de cero punto cuatro puede ser escrito en Python como:

0.4

Pero no hay que olvidar esta sencilla regla, se puede omitir el cero cuando es el único dígito antes del punto decimal.

En esencia, el valor 0.4 se puede escribir como:

.4

Por ejemplo: el valor de 4.0 puede ser escrito como:

4.

4 es un número entero, mientras que 4.0 es un número punto-flotante.

El punto decimal es lo que determina si es flotante.

Por otro lado, no solo el punto hace que un número sea flotante. Se puede utilizar la letra e.

Cuando se desea utilizar números que son muy pequeños o muy grandes, se puede implementar la notación científica.

La letra E (también se puede utilizar la letra minúscula e - proviene de la palabra exponente) la cual significa por diez a la n potencia.

Nota:

El exponente (el valor después de la E) debe ser un valor entero.
La base (el valor antes de la E) puede o no ser un valor entero.

Por ejemplo, la velocidad de la luz, expresada en metros por segundo. Escrita directamente se vería de la siguiente manera: 300000000.

Para evitar escribir tantos ceros, los libros de texto emplean la forma abreviada, la cual probablemente hayas visto: 3 x 108.

Una constante de física denominada "La Constante de Planck" (denotada como h), de acuerdo con los libros de texto, tiene un valor de: 6.62607 x 10-34.

Si se quisiera utilizar en un programa, se debería escribir de la siguiente manera:

6.62607E-34

#BOOLEANOS

Estos dos valores booleanos tienen denotaciones estrictas en Python:

True
False

No se pueden cambiar, se deben tomar estos símbolos como son, incluso respetando las mayúsculas y minúsculas.

Los operadores básicos
Un operador es un símbolo del lenguaje de programación, el cual es capaz de realizar operaciones con los valores.

Por ejemplo, como en la aritmética, el signo de + (más) es un operador el cual es capaz de sumar dos números, dando el resultado de la suma.

Sin embargo, no todos los operadores de Python son tan simples como el signo de más, veamos algunos de los operadores disponibles en Python, las reglas que se deben seguir para emplearlos, y como interpretar las reglas que realizan.

Se comenzará con los operadores que están asociados con las operaciones aritméticas más conocidas:

+, -, *, /, //, %, **

Operadores Aritméticos: división entera
Un símbolo de // (doble diagonal) es un operador de división entera. Difiere del operador estándar / en dos detalles:

El resultado carece de la parte fraccionaria, está ausente (para los enteros), o siempre es igual a cero (para los flotantes); esto significa que los resultados siempre son redondeados.
Se ajusta a la regla entero frente a flotante.

El resultado de la división entera siempre se redondea al valor entero inferior mas cercano del resultado de la división no redondeada.

Esto es muy importante: el redondeo siempre va hacia abajo.

El resultado es un par de dos negativos. El resultado real (no redondeado) es -1.5 en ambo casos. Sin embargo, los resultados se redondean. El redondeo se hace hacia el valor inferior entero, dicho valor es -2

En aplicaciones de resta, el operador de resta espera dos argumentos: el izquierdo (un minuendo en términos aritméticos) y el derecho (un sustraendo).

Por esta razón, el operador de resta es considerado uno de los operadores binarios, así como los demás operadores de suma, multiplicación y división.

Pero el operador negativo puede ser utilizado de una forma diferente, observa la ultima línea de código del siguiente fragmento:

print(-4 - 4)
print(4. - 8)
print(-1.1)

Puntos Clave
1. Una expresión es una combinación de valores (o variables, operadores, llamadas a funciones, aprenderás de ello pronto) las cuales son evaluadas y dan como resultado un valor, por ejemplo, 1 + 2.

2. Los operadores son símbolos especiales o palabras clave que son capaces de operar en los valores y realizar operaciones matemáticas, por ejemplo, el * multiplica dos valores: x * y.

3. Los operadores aritméticos en Python: + (suma), - (resta), * (multiplicación), / (división clásica: regresa un flotante siempre), % (módulo: divide el operando izquierdo entre el operando derecho y regresa el residuo de la operación, por ejemplo, 5 % 2 = 1), ** (exponenciación: el operando izquierdo se eleva a la potencia del operando derecho, por ejemplo, 2 ** 3 = 2 * 2 * 2 = 8), // (división entera: retorna el número resultado de la división, pero redondeado al número entero inferior más cercano, por ejemplo, 3 // 2.0 = 1.0).

4. Un operador unario es un operador con solo un operando, por ejemplo, -1, o +3.

5. Un operador binario es un operador con dos operados, por ejemplo, 4 + 5, o 12 % 5.

6. Algunos operadores actúan antes que otros, a esto se le llama - jerarquía de prioridades:

Unario + y - tienen la prioridad más alta.
Después: **, después: *, /, y %, y después la prioridad más baja: binaria + y -.
7. Las sub-expresiones dentro de paréntesis siempre se calculan primero, por ejemplo,  15 - 1 * ( 5 *( 1 + 2 ) ) = 0.

8. Los operadores de exponenciación utilizan enlazado del lado derecho, por ejemplo, 2 ** 2 ** 3 = 256.

2.4.1.1 Variables: cajas en forma de datos

El nombre de la variable debe de estar compuesto por MAYÚSCULAS, minúsculas, dígitos, y el carácter _ (guion bajo).
El nombre de la variable debe comenzar con una letra.
El carácter guion bajo es considerado una letra.
Las mayúsculas y minúsculas se tratan de forma distinta (un poco diferente que en el mundo real - Alicia y ALICIA son el mismo nombre, pero en Python son dos nombres de variable distintos, subsecuentemente, son dos variables diferentes).
El nombre de las variables no pueden ser igual a alguna de las palabras reservadas de Python.

Los nombres de las variables deben estar en minúsculas, con palabras separadas por guiones bajos para mejorar la legibilidad (por ejemplo: var, mi_variable).
Los nombres de las funciones siguen la misma convención que los nombres de las variables (por ejemplo: fun, mi_función).
También es posible usar letras mixtas (por ejemplo: miVariable), pero solo en contextos donde ese ya es el estilo predominante, para mantener la compatibilidad retroactiva con la convención adoptada.

#PALABRAS CLAVE
Observa las palabras que juegan un papel muy importante en cada programa de Python.

['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

No se deben utilizar como nombres: ni para variables, ni para funciones, ni para cualquier otra cosa que se desee crear.

Una variable se crea cuando se le asigna un valor. A diferencia de otros lenguajes de programación, no es necesario declararla.

Si se le asigna cualquier valor a una variable no existente, la variable será automáticamente creada.

La creación (o su sintaxis) es muy simple: solo utiliza el nombre de la variable deseada, después el signo de igual (=) y el valor que se desea colocar dentro de la variable.

var = 1
print(var)

El signo de igual es de hecho un operador de asignación

var = 100
var = 200 + 300
print(var)

500 - ¿Porque? Bueno, primero, la variable var es creada y se le asigna el valor de 100. Después, a la misma variable se le asigna un nuevo valor: el resultado de sumarle 200 a 300, lo cual es 500.

Crear las variables: juan, maria, y adan.
Asignar valores a las variables. El valor debe de ser igual al número de manzanas que cada quien tenía.
Una vez almacenados los números en las variables, imprimir las variables en una línea, y separar cada una de ellas con una coma.
Después se debe crear una nueva variable llamada total_manzanas y se debe igualar a la suma de las tres variables anteriores.
Imprime el valor almacenado en total_manzanas en la consola.

juan=3
maria=5
adan=6

print(juan,",",maria,",",adan)

total_manzanas = juan+maria+adan
print(total_manzanas)

Observa el código en el editor: lee un valor flotante, lo coloca en una variable llamada x, e imprime el valor de la variable llamada y. Tu tarea es completar el código para evaluar la siguiente expresión:

3x3 - 2x2 + 3x - 1

El resultado debe ser asignado a y.

Recuerda que la notación algebraica clásica muy seguido omite el operador de multiplicación, aquí se debe de incluir de manera explicita. Nota como se cambia el tipo de dato para asegurarnos de que x es del tipo flotante.

Entrada de Muestra

x = 0
x = 1
x = -1

Salida Esperada

y = -1.0
y = 3.0
y = -9.0

ejercicio

x =  -1
x = float(x)
y=3*x**3-2*x**2+3*x-1
print("y =", y)

2.4.1.11

##COMENTARIOS

un comentario es un texto que comienza con el símbolo # y se extiende hasta el final de la línea.

Si se desea colocar un comentario que abarca varias líneas, se debe colocar este símbolo en cada línea.

Justo como el siguiente código:

# Esta programa calcula la hipotenusa (c)
# a y b son las longitudes de los catetos

Si deseas comentar o descomentar rápidamente varias líneas de código, selecciona las líneas que deseas modificar y utiliza el siguiente método abreviado de teclado: CTRL + / (Windows)

#FUNCION INPUT()

print() envía datos a la consola.

Esta nueva función obtiene datos de ella.

print() no tiene un resultado utilizable. La importancia de esta nueva función es que regresa un valor muy utilizable.

La función input() es capaz de leer datos que fueron introducidos por el usuario y pasar esos datos al programa en ejecución.

El programa entonces puede manipular los datos, haciendo que el código sea verdaderamente interactivo.

Todos los programas leen y procesan datos. Un programa que no obtiene datos de entrada del usuario es un programa sordo.

Observa el ejemplo:

print("Dime algo...")
anything = input()
print("Mmm...", anything, "...¿en serio?")

Nota:

El programa solicita al usuario que inserte algún dato desde la consola (seguramente utilizando el teclado, aunque también es posible introducir datos utilizando la voz o alguna imagen).
La función input() es invocada sin argumentos (es la manera mas sencilla de utilizar la función); la función pondrá la consola en modo de entrada; aparecerá un cursor que parpadea, y podrás introducir datos con el teclado, al terminar presiona la tecla Enter; todos los datos introducidos serán enviados al programa a través del resultado de la función.
Nota: el resultado debe ser asignado a una variable; esto es crucial, si no se hace los datos introducidos se perderán.
Después se utiliza la función print() para mostrar los datos que se obtuvieron, con algunas observaciones adicionales.

La función input() con un argumento

La función input() puede hacer algo más: puede mostrar un mensaje al usuario sin la ayuda de la función print().

Se ha modificado el ejemplo un poco, observa el código:

anything = input("Dime algo...")
print("Mmm...", anything, "...¿En serio?")

La función input() al ser invocada con un argumento, contiene una cadena con un mensaje.
El mensaje será mostrado en consola antes de que el usuario tenga oportunidad de escribir algo.
Después de esto input() hará su trabajo.
Esta variante de la invocación de la función input() simplifica el código y lo hace más claro.

 el resultado de la función input() es una cadena.

Una cadena que contiene todos los caracteres que el usuario introduce desde el teclado. No es un entero ni un flotante.

Esto significa que no se debe utilizar como un argumento para operaciones matemáticas.

Python ofrece dos simples funciones para especificar un tipo de dato y resolver este problema, aquí están: int() y float().

Sus nombres indican cual es su función:

La función int() toma un argumento (por ejemplo, una cadena: int(string)) e intenta convertirlo a un valor entero; si llegase a fallar, el programa entero fallará también (existe una manera de solucionar esto.
La función float() toma un argumento (por ejemplo, una cadena: float(string)) e intenta convertirlo a flotante (el resto es lo mismo).

anything = float(input("Inserta un número: "))
something = anything ** 2.0
print(anything, "al cuadrado es", something)

ej
leg_a = float(input("Inserta la longitud del primer cateto: "))
leg_b = float(input("Inserta la longitud del segundo cateto: "))
hypo = (leg_a**2 + leg_b**2) ** .5
print("La longitud de la hipotenusa es:", hypo)

consola
Inserta la longitud del primer cateto: 7
Inserta la longitud del segundo cateto: 8
La longitud de la hipotenusa es: 10.63014581273465

Concatenación

El signo de + (más), al ser aplicado a dos cadenas, se convierte en un operador de concatenación:

string + string

Replicación
El signo de * (asterisco), cuando es aplicado a una cadena y a un número (o a un número y cadena) se convierte en un operador de replicación.

string * number
number * string


Replica la cadena el numero de veces indicado por el número.

Por ejemplo:

"James" * 3 produce "JamesJamesJames"
3 * "an" produce "ananan"
5 * "2" (o "2" * 5) produce "22222" (no 10!)

Un número menor o igual que cero produce una cadena vacía.

También se puede convertir un numero a una cadena, lo cual es más fácil y rápido, esta operación es posible hacerla siempre.

Una función capaz de hacer esto se llama str():

str(number)

2.6.1.11 LABORATORIO: Operadores y expresiones

Puntos Clave

1. La función print() envía datos a la consola, mientras que la función input() obtiene datos de la consola.

2. La función input() viene con un parámetro inicial: un mensaje de tipo cadena para el usuario. Permite escribir un mensaje antes de la entrada del usuario, por ejemplo:

name = input("Ingresa tu nombre: ")
print("Hola, " + name + ". ¡Un gusto conocerte!")


3. Cuando la función input() es llamada o invocada, el flujo del programa se detiene, el símbolo del cursor se mantiene parpadeando (le está indicando al usuario que tome acción ya que la consola está en modo de entrada) hasta que el usuario haya ingresado un dato y/o haya presionado la tecla Enter.

NOTA

Puedes probar la funcionalidad completa de la función input() localmente en tu máquina. Por razones de optimización, se ha limitado el máximo número de ejecuciones en Edube a solo algunos segundos únicamente. Ve a Sandbox, copia y pega el código que está arriba, ejecuta el programa y espera unos segundos. Tu programa debe detenerse después de unos segundos. Ahora abre IDLE, y ejecuta el mismo programa ahí -¿Puedes notar alguna diferencia?

Consejo: La característica mencionada anteriormente de la función input() puede ser utilizada para pedirle al usuario que termine o finalice el programa. Observa el siguiente código:

name = input("Ingresa tu nombre: ")
print("Hola, " + name + ". ¡Un gusto conocerte!")

print("\nPresiona la tecla Enter para finalizar el programa.")
input()
print("FIN.")


4. El resultado de la función input() es una cadena. Se pueden unir cadenas unas con otras a través del operador de concatenación (+). Observa el siguiente código:

num_1 = input("Ingresa el primer número: ") # Ingresa 12
num_2 = input("Ingresa el segundo número: ") # Ingresa 21

print(num_1 + num_2) el programa retorna 1221


5. También se pueden multiplicar (* - replicación) cadenas, por ejemplo:

my_input = input("Ingresa algo: ") # Ejemplo: hola
print(my_input * 3) # Salida esperada: holaholahola

###  MÓDULO 3
Valores booleanos, ejecución condicional, bucles, listas y su procesamiento, operaciones lógicas y de bit a bit

Comparación: operador de igualdad
Pregunta: ¿Son dos valores iguales?

Para hacer esta pregunta, se utiliza el == operador (igual igual).

No olvides esta importante distinción:

= es un operador de asignación, por ejemplo, a = b assigna a la varable a el valor de b.
== es una pregunta ¿Son estos valores iguales? así que a == b compara a y b.
Es un operador binario con enlazado del lado izquierdo. Necesita dos argumentos y verifica si son iguales.

Desigualdad: el operador no es igual a (!=)

Operadores de comparación: mayor que >=
operadores binarios con enlace del lado izquierdo, y su prioridad es mayor que la mostrada por == y !=.

Operadores de comparación: menor o igual que <=

Prioridad	Operador	
1	+, -	unario
2	**	
3	*, /, //, %	
4	+, -	binario
5	<, <=, >, >=	
6	==, !=	

n=int(input("ingrese un numero: "))
print (n>=100)

Condiciones y ejecución condicional

if true_or_not:
    do_this_if_true


Esta sentencia condicional consta de los siguientes elementos, estrictamente necesarios en este orden:

La palabra clave reservada if.
Uno o más espacios en blanco.
Una expresión (una pregunta o una respuesta) cuyo valor se interpretar únicamente en términos de True (cuando su valor no sea cero) y False (cuando sea igual a cero).
Unos dos puntos seguido de una nueva línea.
Una instrucción con sangría o un conjunto de instrucciones (se requiere absolutamente al menos una instrucción); la sangría se puede lograr de dos maneras: insertando un número particular de espacios (la recomendación es usar cuatro espacios de sangría), o usando el tabulador; nota: si hay mas de una instrucción en la parte con sangría, la sangría debe ser la misma en todas las líneas; aunque puede parecer lo mismo si se mezclan tabuladores con espacios, es importante que todas las sangrías sean exactamente iguales Python 3 no permite mezclar espacios y tabuladores para la sangría.


¿Cómo funciona esta sentencia?

Si la expresión true_or_not representa la verdad (es decir, su valor no es igual a cero), las sentencias con sangría se ejecutarán.
Si la expresión true_or_not no representa la verdad (es decir, su valor es igual a cero), las sentencias con sangría se omitirán , y la siguiente instrucción ejecutada será la siguiente al nivel de la sangría original.

# Sentencia IF

Las sentencias condicionales deben tener sangría. Esto crea una estructura muy legible, demostrando claramente todas las rutas de ejecución posibles en el código.

Analiza el siguiente código:

if sheep_counter >= 120:
    make_a_bed()
    take_a_shower()
    sleep_and_dream()
feed_the_sheepdogs()

tender la cama, tomar una ducha y dormir y soñar se ejecutan condicionalmente, cuando sheep_counter alcanza el límite deseado.

Alimentar a los perros, sin embargo, siempre se hace (es decir, la función feed_the_sheepdogs() no tiene sangría y no pertenece al bloque if, lo que significa que siempre se ejecuta).

# if-else
sabemos lo que haremos si se cumplen las condiciones, y sabemos lo que haremos si no todo sale como queremos. En otras palabras, tenemos un "Plan B".

Python nos permite expresar dichos planes alternativos. 

if true_or_false_condition:
    perform_if_condition_true
else:
    perform_if_condition_false

La parte del código que comienza con else dice que hacer si no se cumple la condición especificada por el if.

Si la condición se evalúa como True (su valor no es igual a cero), la instrucción perform_if_condition_true se ejecuta, y la sentencia condicional llega a su fin.
Si la condición se evalúa como False (es igual a cero), la instrucción perform_if_condition_false se ejecuta, y la sentencia condicional llega a su fin.

Todo lo que hemos dicho sobre la sangría funciona de la misma manera dentro de la rama else :

if the_weather_is_good:
    go_for_a_walk()
    have_fun()
else:
    go_to_a_theater()
    enjoy_the_movie()
have_lunch()

 # if else anidados
 
 Cada else se refiere al if que se encuentra en el mismo nivel de sangría; se necesita saber esto para determinar cómo se relacionan los if y los else.

 if the_weather_is_good:
    if nice_restaurant_is_found:
        have_lunch()
    else:
        eat_a_sandwich()
else:
    if tickets_are_available:
        go_to_the_theater()
    else:
        go_shopping()

# elif

elif se usa para verificar más de una condición, y para detener cuando se encuentra la primera sentencia verdadera.

if the_weather_is_good:
    go_for_a_walk()
elif tickets_are_available:
    go_to_the_theater()
elif table_is_available:
    go_for_lunch()
else:
    play_chess_at_home()
 
# EJ IF ELSE

numero1= int(input("ingrese el numero: "))
numero2= int(input("ingrese el numero: "))
if numero1>numero2:
    numeroMayor=numero1
else:
    numeroMayor=numero2
print("El numero mayor es: ",numeroMayor)

# EJ IF ELSE 2

numero1=int(input("escribe un numero: "))
numero2=int(input("escribe un numero: "))
if numero1>numero2: numeroMayor=numero1
else: numeroMayor=numero2
print ("el numero mayor es: ", numeroMayor)


# PSEUDOCODIGO

 no es un lenguaje de programación real (no se puede compilar ni ejecutar), pero está formalizado, es conciso y se puede leer

 # MAX()
 para encontrar el número más grande de todos

 # MIN()
  para encontrar el número más pequeno de todos

  # -----Escribe un programa que utilice el concepto de ejecución condicional, tome una cadena como entrada y que:

Imprima el enunciado "Si, ¡El ESPATIFILIO! es la mejor planta de todos los tiempos!" en la pantalla si la cadena ingresada es "ESPATIFILIO".
Imprima "No, ¡quiero un gran ESPATIFILIO!" si la cadena ingresada es "espatifilo".
Imprima "¡ESPATIFILIO!, ¡No [entrada]!" de lo contrario. Nota: [entrada] es la cadena que se toma como entrada.

plantaFavo = str(input("Cual es mi planta favorita?: "))
if plantaFavo=="ESPATIFILIO": print("Si, ¡El ESPATIFILIO! es la mejor planta de todos los tiempos!")
elif plantaFavo=="espatifilo": print ("No, ¡quiero un gran ESPATIFILIO!")
else: print ("¡ESPATIFILIO!, ¡No "+plantaFavo+"!")

***importante: para numeros no usar comas ni puntos para diferenciar mil o miles, se escribe el numero de una
100000. si pongo coma o punto lo toma como flotante!

income = float(input("Introduce el ingreso anual:"))
#el usuario debe ingresar un numero flotante

#declaro una variable para cada tipo de ingreso

ingresoMayor=85528
ingresoMenor=14839.2

#declaro una variable para el exedente (porque me parecio mas claro)
#es importante el orden, si pongo income desp de ingreso mayor me dara un n negativo

exedente= income-ingresoMayor

#calculo y condiciono

if income < ingresoMayor: 
    tax= (18*income)/100 - 556.2
else: 
    tax= ingresoMenor + 32*exedente/100
tax = round(tax, 0)

#condiciono a que si el numero es negativo devuelva 0.0

if tax<0: tax=0.0

#printeo

print("El impuesto es:", tax, "pesos")

#consola

Introduce el ingreso anual:10000
El impuesto es: 1244.0 pesos
Introduce el ingreso anual:100000
El impuesto es: 19470.0 pesos
Introduce el ingreso anual:1000
El impuesto es: 0.0 pesos
Introduce el ingreso anual:-100
El impuesto es: 0.0 pesos

# -------Desde la introducción del calendario Gregoriano (en 1582), se utiliza la siguiente regla para determinar el tipo de año:

Si el número del año no es divisible entre cuatro, es un año común.
De lo contrario, si el número del año no es divisible entre 100, es un año bisiesto.
De lo contrario, si el número del año no es divisible entre 400, es un año común.
De lo contrario, es un año bisiesto.
Observa el código en el editor: solo lee un número de año y debe completarse con las instrucciones que implementan la prueba que acabamos de describir.

El código debe mostrar uno de los dos mensajes posibles, que son Año Bisiesto o Año Común, según el valor ingresado.

Sería bueno verificar si el año ingresado cae en la era Gregoriana y emitir una advertencia de lo contrario: No dentro del período del calendario Gregoriano. Consejo: utiliza los operadores != y %.

years = int(input("Introduce un año:"))
if years % 4 != 0: ano = "Es un ano comun"
elif years % 100 != 0: ano= "Es un ano bisciesto"
elif years % 400 !=0: ano= "es un ano comun"
else: ano="Es un ano bisciesto"
if years < 1582: ano="No dentro del período del calendario Gregoriano"

print(ano)

Introduce un año:2000
Es un ano bisciesto
Introduce un año:2015
Es un ano comun
Introduce un año:1999
Es un ano comun
Introduce un año:1996
Es un ano bisciesto
Introduce un año:1580
No dentro del período del calendario Gregoriano

# Operadores

1. asumiendo que x=0, y=1 y z=0

==	Devuelve si los valores de los operandos son iguales, y False de lo contrario.	
x == y  # False
x == z  # True

!=	Devuelve True si los valores de los operandos no son iguales, y False de lo contrario.	
x != y  # True
x != z  # False

>	Devuelve True si el valor del operando izquierdo es mayor que el valor del operando derecho, y False de lo contrario.	
x > y  # False
y > z  # True

<	Devuelve True si el valor del operando izquierdo es menor que el valor del operando derecho, y False de lo contrario.	
x < y  # True
y < z  # False

≥	Devuelve True si el valor del operando izquierdo es mayor o igual al valor del operando derecho, y False de lo contrario.	
x >= y  # False
x >= z  # True
y >= z  # True

≤	Devuelve True si el valor del operando izquierdo es menor o igual al valor del operando derecho, y False de lo contrario.	
x <= y  # True
x <= z  # True
y <= z  # False

2. Cuando deseas ejecutar algún código solo si se cumple una determinada condición, puedes usar una sentencia condicional:

Una única sentencia if, por ejemplo:

x = 10

if x == 10: # condición
    print("x es igual a 10")  # Ejecutado si la condición es Verdadera.


Una serie de sentencias if, por ejemplo:

x = 10

if x > 5: # primera condición
    print("x es mayor que 5")  # Ejecutado si la primera condición es Verdadera.

if x < 10: # segunda condición
    print("x is less than 10")  # Ejecutado si la segunda condición es Verdadera.

if x == 10: # tercera condición
    print("x is equal to 10")  # Ejecutado si la tercera condición es Verdadera.
    

Cada sentencia if se prueba por separado.

Una sentencia de if-else, por ejemplo:

x = 10

if x < 10:  # Condición
    print("x es menor que 10")  # Ejecutado si la condición es Verdadera.

else:
    print("x es mayor o igual a 10")  # Ejecutado si la condición es Falsa.


Una serie de sentencias if seguidas de un else, por ejemplo:

x = 10

if x > 5:  # True
    print("x > 5")

if x > 8:  # True
    print("x > 8")

if x > 10:  # False
    print("x > 10")

else:
    print("se ejecutará el else")


Cada if se prueba por separado. El cuerpo de else se ejecuta si el último if es False.

La sentencia if-elif-else, por ejemplo:

x = 10

if x == 10:  # True
    print("x == 10")

if x > 15:  # False
    print("x > 15")

elif x > 10:  # False
    print("x > 10")

elif x > 5:  # True
    print("x > 5")

else:
    print("else no será ejecutado")


Si la condición para if es False, el programa verifica las condiciones de los bloques elif posteriores: el primer elif que sea True es el que se ejecuta. Si todas las condiciones son False, se ejecutará el bloque else.

Sentencias condicionales anidadas, ejemplo:

x = 10

if x > 5:  # True
    if x == 6:  # False
        print("anidado: x == 6")
    elif x == 10:  # True
        print("anidado: x == 10")
    else:
        print("anidado: else")
else:
    print("else")

## Bucles en Python | while

En general, en Python, un bucle se puede representar de la siguiente manera:

while conditional_expression:
    instruction

 while repite la ejecución siempre que la condición se evalúe como True.

Nota: todas las reglas relacionadas con sangría también se aplican aquí.

Si deseas ejecutar más de una sentencia dentro de un while, debes (como con if) poner sangría a todas las instrucciones de la misma manera.
Una instrucción o conjunto de instrucciones ejecutadas dentro del while se llama el cuerpo del bucle.
Si la condición es False (igual a cero) tan pronto como se compruebe por primera vez, el cuerpo no se ejecuta ni una sola vez (ten en cuenta la analogía de no tener que hacer nada si no hay nada que hacer).
El cuerpo debe poder cambiar el valor de la condición, porque si la condición es True al principio, el cuerpo podría funcionar continuamente hasta el infinito.

#Almacena el actual número más grande aquí.
largest_number = -999999999

#Ingresa el primer valor.
number = int(input("Introduce un número o escribe -1 para detener: "))

#Si el número no es igual a -1, continuaremos
while number != -1:
    # ¿Es el número más grande que el valor de largest_number?
    if number > largest_number:
        # Sí si, se actualiza largest_number.
        largest_number = number
    # Ingresa el siguiente número.
    number = int(input("Introduce un número o escribe -1 para detener: "))

#Imprime el número más grande
print("El número más grande es:", largest_number)

## ej bucle


numerosPares=0
numerosImpares=0

#Pido ingresar un numero
numero=int(input("Escribir un numero o 0 para terminar: "))

#Abro el bucle para que cierre si ingresa 0
while numero!=0:
#numero impar
    if numero %2==1:
        numerosImpares += 1
#numero par
    else:
        numerosPares += 1
#lee el siguiente numero
    numero=int(input("Escribir otro numero o 0 para terminar: "))

#imprimo los resultados
print("Los numeros pares son: ", numerosPares)
print("Los numeros imapares son: ", numerosImpares)

# ejercicio bucle

Pedirá al usuario que ingrese un número entero.
Utilizará un bucle while.
Comprobará si el número ingresado por el usuario es el mismo que el número escogido por el mago. Si el número elegido por el usuario es diferente al número secreto del mago, el usuario debería ver el mensaje "¡Ja, ja! ¡Estás atrapado en mi bucle!"  y se le solicitará que ingrese un número nuevamente. Si el número ingresado por el usuario coincide con el número escogido por el mago, el número debe imprimirse en la pantalla, y el mago debe decir las siguientes palabras: "¡Bien hecho, muggle! Eres libre ahora".


print(
"""
+==================================+
| ¡Bienvenido a mi juego, muggle!  |
| Introduce un número entero       |
| y adivina qué número he          |
| elegido para ti.                 |
| Entonces,                        |
| ¿Cuál es el número secreto?      |
+==================================+
""")

numero= int(input("Ingrese un numero: "))
secret_number = 777

while numero!= secret_number:
    if numero != secret_number:
     print ("¡Ja, ja! ¡Estás atrapado en mi bucle!")
   
    numero= int(input("Ingrese un numero: "))
print ("¡Bien hecho, muggle! Eres libre ahora")

# for

for i in range(100):
    # do_something()
    pass

La palabra reservada for abre el bucle for; nota - No hay condición después de eso; no tienes que pensar en las condiciones, ya que se verifican internamente, sin ninguna intervención.
Cualquier variable después de la palabra reservada for es la variable de control del bucle; cuenta los giros del bucle y lo hace automáticamente.
La palabra reservada in introduce un elemento de sintaxis que describe el rango de valores posibles que se asignan a la variable de control.
La función range() (esta es una función muy especial) es responsable de generar todos los valores deseados de la variable de control; en nuestro ejemplo, la función creará (incluso podemos decir que alimentará el bucle con) valores subsiguientes del siguiente conjunto: 0, 1, 2 .. 97, 98, 99; nota: en este caso, la función range() comienza su trabajo desde 0 y lo finaliza un paso (un número entero) antes del valor de su argumento.
Nota la palabra clave pass dentro del cuerpo del bucle - no hace nada en absoluto; es una instrucción vacía : la colocamos aquí porque la sintaxis del bucle for exige al menos una instrucción dentro del cuerpo (por cierto, if, elif, else y while expresan lo mismo).

La invocación de la función range() puede estar equipada con dos argumentos, no solo uno:

for i in range(2, 8):
    print("El valor de i es actualmente", i)

 la función range() solo acepta enteros como argumentos y genera secuencias de enteros.

 La función range() también puede aceptar tres argumentos:
 El tercer argumento es un incremento: es un valor agregado para controlar la variable en cada giro del bucle (como puedes sospechar, el valor predeterminado del incremento es 1).

 Si el conjunto generado por la función range() está vacío, el bucle no ejecutará su cuerpo en absoluto.
  
El conjunto generado por range() debe ordenarse en un orden ascendente. No hay forma de forzar el range() para crear un conjunto en una forma diferente. Esto significa que el segundo argumento de range() debe ser mayor que el primero.

power = 1
for expo in range(16):
    print("2 a la potencia de", expo, "es", power)
    power *= 2


La variable expo se utiliza como una variable de control para el bucle e indica el valor actual del exponente. La propia exponenciación se sustituye multiplicando por dos. Dado que 2 0 es igual a 1, después 2 × 1 es igual a 21, 2 × 21 es igual a 22, y así sucesivamente.

# break y continue

break: sale del bucle inmediatamente, e incondicionalmente termina la operación del bucle; el programa comienza a ejecutar la instrucción más cercana después del cuerpo del bucle.
continue: se comporta como si el programa hubiera llegado repentinamente al final del cuerpo; el siguiente turno se inicia y la expresión de condición se prueba de inmediato.

# break - ejemplo

print("La instrucción break:")
for i in range(1, 6):
    if i == 3:
        break
    print("Dentro del bucle.", i)
print("Fuera del bucle.")


# continue - ejemplo

print("\nLa instrucción continue:")
for i in range(1, 6):
    if i == 3:
        continue
    print("Dentro del bucle.", i)
print("Fuera del bucle.")

Console 

La instrucción break:
Dentro del bucle. 1
Dentro del bucle. 2
Fuera del bucle.

La instrucción continue:
Dentro del bucle. 1
Dentro del bucle. 2
Dentro del bucle. 4
Dentro del bucle. 5
Fuera del bucle.

# break corta el ciclo a partir de la condicion y no ejecuta lo que sigue
# continue salta el ciclo cuando se cumpla la condicion y continua el ciclo

# ejercicio break
Diseña un programa que use un bucle while y le pida continuamente al usuario que ingrese una palabra a menos que ingrese "chupacabra" como la palabra de salida secreta, en cuyo caso el mensaje "¡Has dejado el bucle con éxito". Debe imprimirse en la pantalla y el bucle debe terminar.

No imprimas ninguna de las palabras ingresadas por el usuario. Utiliza el concepto de ejecución condicional y la sentencia break.

palabra = str(input("ingresa una palabra, si escribis 'chupacabra' el programa se corta: "))
while palabra!="chupacabra":
  palabra = str(input("ingresa una palabra, si escribis 'chupacabra' el programa se corta: "))
       
print("¡Has dejado el bucle con éxito!")

# ejercicio break

Pedir al usuario que ingrese una palabra.
Utiliza user_word = user_word.upper() para convertir la palabra ingresada por el usuario a mayúsculas; hablaremos sobre los llamados métodos de cadena y el upper() muy pronto, no te preocupes.
Utiliza la ejecución condicional y la instrucción continue para "comer" las siguientes vocales A , E , I , O , U de la palabra ingresada.
Imprime las letras no consumidas en la pantalla, cada una de ellas en una línea separada.

# Indicar al usuario que ingrese una palabra

user_word = str(input("ingrese una palabra: "))

# y asignarlo a la variable user_word.
user_word=user_word.upper()

for letter in user_word:
    if letter=="A":
        continue
    elif letter=="E":
        continue
    elif letter=="I":
        continue
    elif letter=="O":
        continue
    elif letter=="U":
        continue
    print (letter)
  
  # ejercicio continue

Tu programa debe:

Pedir al usuario que ingrese una palabra.
Utilizar user_word = user_word.upper() para convertir la palabra ingresada por el usuario a mayúsculas; hablaremos sobre los llamados métodos de cadena y el upper() muy pronto, no te preocupes.
Emplea la ejecución condicional y la instrucción continue para "comer" las siguientes vocales A , E , I , O , U de la palabra ingresada.
Asigne las letras no consumidas a la variable word_without_vowels e imprime la variable en la pantalla.
Analiza el código en el editor. Hemos creado word_without_vowels y le hemos asignado una cadena vacía. Utiliza la operación de concatenación para pedirle a Python que combine las letras seleccionadas en una cadena más larga durante los siguientes giros de bucle, y asignarlo a la variable word_without_vowels.

word_without_vowels = ""

user_word = str(input("ingrse una palabra: "))
user_word=user_word.upper()

for letter in user_word:
    if letter == "A": 
        continue
    if letter == "E":
        continue
    if letter == "I":
        continue
    if letter == "O":
        continue
    if letter == "U":
        continue
    word_without_vowels += letter
print (word_without_vowels)

# for y else
Cuando el cuerpo del bucle no se ejecuta, la variable de control conserva el valor que tenía antes del bucle.
Nota: si la variable de control no existe antes de que comience el bucle, no existirá cuando la ejecución llegue a la rama else.

# ejercicio while

Tu tarea es escribir un programa que lea la cantidad de bloques que tienen los constructores, y generar la altura de la pirámide que se puede construir utilizando estos bloques.

Nota: La altura se mide por el número de capas completas: si los constructores no tienen la cantidad suficiente de bloques y no pueden completar la siguiente capa, terminan su trabajo inmediatamente.

blocks = int(input("Ingresa el número de bloques: "))

height = 0
in_layer = 1
while in_layer <= blocks:
    height += 1
    blocks -= in_layer
    in_layer += 1

print("La altura de la pirámide:", height)

# Puntos Clave

Existen dos tipos de bucles en Python: while y for:

El bucle while ejecuta una sentencia o un conjunto de sentencias siempre que una condición booleana especificada sea verdadera, por ejemplo:

Ejemplo 1
while True:
    print("Atascado en un bucle infinito.")

Ejemplo 2
counter = 5
while counter > 2:
    print(counter)
    counter -= 1


El bucle for ejecuta un conjunto de sentencias muchas veces; se usa para iterar sobre una secuencia (por ejemplo, una lista, un diccionario, una tupla o un conjunto; pronto aprenderás sobre ellos) u otros objetos que son iterables (por ejemplo, cadenas). Puedes usar el bucle for para iterar sobre una secuencia de números usando la función incorporada range. Mira los ejemplos a continuación:

Ejemplo 1
word = "Python"
for letter in word:
    print(letter, end="*")

Ejemplo 2
for i in range(1, 10):
    if i % 2 == 0:
        print(i)


Puedes usar las sentencias break y continue para cambiar el flujo de un bucle:

Utiliza break para salir de un bucle, por ejemplo:

text = "OpenEDG Python Institute"
for letter in text:
    if letter == "P":
        break
    print(letter, end="")


Utiliza continue para omitir la iteración actual, y continuar con la siguiente iteración, por ejemplo:

text = "pyxpyxpyx"
for letter in text:
    if letter == "x":
        continue
    print(letter, end="")

# reemplazar con for

Crea un programa con un bucle for y una sentencia continue. El programa debe iterar sobre una cadena de dígitos, reemplazar cada 0 con x, e imprimir la cadena modificada en la pantalla. Usa el esqueleto de abajo:

for digit in "0165031806510":
    if digit == "0":
        print("x", end="")
        continue
    print(digit, end="")

# and
Un operador de conjunción lógica en Python es la palabra and. Es un operador binario con una prioridad inferior a la expresada por los operadores de comparación. Nos permite codificar condiciones complejas sin el uso de paréntesis como este:

counter > 0 and value == 100


Argumento A	Argumento B	A and B
False	False	False
False	True	False
True	False	False
True	True	True


# or
Un operador de disyunción es la palabra or. Es un operador binario con una prioridad más baja que and (al igual que + en comparación con *)

Argumento A	Argumento B	A or B
False	False	False
False	True	True
True	False	True
True	True	True

# not
Además, hay otro operador que se puede aplicar para condiciones de construcción. Es un operador unario que realiza una negación lógica. Su funcionamiento es simple: convierte la verdad en falso y lo falso en verdad

Este operador se escribe como la palabra not, y su prioridad es muy alta: igual que el unario + y -. Su tabla de verdad es simple:


Argumento	not Argumento
False	True
True	False

# Operadadores bit a bit
Sin embargo, hay cuatro operadores que le permiten manipular bits de datos individuales. Se denominan operadores bit a bit.

Cubren todas las operaciones que mencionamos anteriormente en el contexto lógico, y un operador adicional. Este es el operador xor (significa o exclusivo ), y se denota como ^ (signo de intercalación).

Aquí están todos ellos:

 &  (ampersand) - conjunción a nivel de bits.
 |  (barra vertical) - disyunción a nivel de bits.
 ~  (tilde) - negación a nivel de bits.
 ^  (signo de intercalación) - o exclusivo a nivel de bits (xor).

 & requieres exactamente dos 1 para proporcionar 1 como resultado.
| requiere al menos un 1 para proporcionar 1 como resultado.
^ requiere exactamente un 1 para proporcionar 1 como resultado. Solo un 1 debe tener, si tiene dos es 0

tratan con cada bit por separado.

3.3.1.3 Operaciones lógicas y de bits en Python

El operador & operará con cada par de bits correspondientes por separado, produciendo los valores de los bits relevantes del resultado. Por lo tanto, el resultado será el siguiente:

i	00000000000000000000000000001111
j	00000000000000000000000000010110
bit = i & j	00000000000000000000000000000110

# ej operador a nivel de bits

numero1 = 4 #100
numero2 = 8 #000

resultado = numero1 & numero2 #

Desplazamiento izquierdo binario y desplazamiento derecho binario
Python ofrece otra operación relacionada con los bits individuales: shifting. Esto se aplica solo a los valores de número entero, y no debe usar flotantes como argumentos para ello.

desplazar un valor un bit a la izquierda corresponde a multiplicarlo por dos; respectivamente, desplazar un bit a la derecha es como dividir entre dos (observe que se pierde el bit más a la derecha).

Los operadores de cambio en Python son un par de dígrafos: < < y > >, sugiriendo claramente en qué dirección actuará el cambio.

>> hace un desplazamiento bit a bit a la derecha, por ejemplo, y >> 1 = 8, el cual es 0000 1000 en binario.
<< hace un desplazamiento bit a bit a la izquierda, por ejemplo, y << 3 = , el cual es 1000 0000 en binario.

numero = 1
resultado = 8 >> 2
print (resultado)
2

3.4.1.1 Listas - colecciones de datos

# arreglos

# funcion len()

La función toma el nombre de la lista como un argumento y devuelve el número de elementos almacenados actualmente dentro de la lista (en otras palabras, la longitud de la lista).

# del

Cualquier elemento de la lista puede ser eliminado en cualquier momento, esto se hace con una instrucción llamada del (eliminar). Nota: es una instrucción, no una función.
ej
del x

Un elemento con un índice igual a -1 es el último en la lista.

print(numbers[-1])

Del mismo modo, el elemento con un índice igual a -2 es el anterior al último en la lista.

print(numbers[-2])

ej

hat_list = [1, 2, 3, 4, 5]  # Esta es una lista existente de números ocultos en el sombrero.

--Paso 1: escribe una línea de código que solicite al usuario
--reemplazar el número de en medio con un número entero ingresado por el usuario.

numero = int(input("Ingresa un numero: "))
hat_list[2] = numero

--Paso 2: escribe aquí una línea de código que elimine el último elemento de la lista.

del hat_list[-1]

--Paso 3: escribe aquí una línea de código que imprima la longitud de la lista existente.

print("la longitud del array es: ", len(hat_list))
print(hat_list)

# metodos

Un método es un tipo específico de función: se comporta como una función y se parece a una función, pero difiere en la forma en que actúa y en su estilo de invocación.

Un método es propiedad de los datos para los que trabaja, mientras que una función es propiedad de todo el código.

El método se comportará como una función, pero puede hacer algo más: puede cambiar el estado interno de los datos a partir de los cuales se ha invocado.

# append() 

Un nuevo elemento puede ser añadido al final de la lista existente:

list.append(value)

Toma el valor de su argumento y lo coloca al final de la lista que posee el método.

La longitud de la lista aumenta en uno.

# insert()

puede agregar un nuevo elemento en cualquier lugar de la lista, no solo al final.

list.insert(location, value)


Toma dos argumentos:

El primero muestra la ubicación requerida del elemento a insertar. Nota: todos los elementos existentes que ocupan ubicaciones a la derecha del nuevo elemento (incluido el que está en la posición indicada) se desplazan a la derecha, para hacer espacio para el nuevo elemento.
El segundo es el elemento a insertar.

numbers = [111, 7, 2, 1]
print(len(numbers))
print(numbers)

numbers.append(4)

print(len(numbers))
print(numbers)

numbers.insert(0, 222)
print(len(numbers))
print(numbers)

consola
4
[111, 7, 2, 1]
5
[111, 7, 2, 1, 4]
6
[222, 111, 7, 2, 1, 4]

# Agregando elementos a una lista

Puedes iniciar la vida de una lista creándola vacía (esto se hace con un par de corchetes vacíos)

con append

my_list = []  # Creando una lista vacía.

for i in range(5):
    my_list.append(i + 1)

print(my_list)

[1, 2, 3, 4, 5]

con insert

my_list = []  # Creando una lista vacía.

for i in range(5):
    my_list.insert(0, i + 1)

print(my_list)

[5, 4, 3, 2, 1]

# Haciendo uso de las listas

A la lista se le asigna una secuencia de cinco valores enteros.
La variable i toma los valores 0, 1,2,3, y 4, y luego indexa la lista, seleccionando los elementos siguientes: el primero, segundo, tercero, cuarto y quinto.
Cada uno de estos elementos se agrega junto con el operador += a la variable suma, dando el resultado final al final del bucle.
Observa la forma en que se ha empleado la función len(), hace que el código sea independiente de cualquier posible cambio en el contenido de la lista.

my_list = [10, 1, 8, 3, 5]
total = 0

for i in range(len(my_list)):
    total += my_list[i]

print(total)

La instrucción for especifica la variable utilizada para navegar por la lista (i) seguida de la palabra clave in y el nombre de la lista siendo procesado (my_list).
A la variable i se le asignan los valores de todos los elementos de la lista subsiguiente, y el proceso ocurre tantas veces como hay elementos en la lista.
Esto significa que usa la variable i como una copia de los valores de los elementos, y no necesita emplear índices.
La función len() tampoco es necesaria aquí.

my_list = [10, 1, 8, 3, 5]
total = 0

for i in my_list:
    total += i

print(total)

# intercambiar fácilmente los elementos de la lista para revertir su orden:

my_list = [10, 1, 8, 3, 5]

my_list[0], my_list[4] = my_list[4], my_list[0]
my_list[1], my_list[3] = my_list[3], my_list[1]

print(my_list)

# iterar listas largas

my_list = [10, 1, 8, 3, 5]
length = len(my_list)

for i in range(length // 2):
    my_list[i], my_list[length - i - 1] = my_list[length - i - 1], my_list[i]

print(my_list)


Nota:

Hemos asignado la variable length a la longitud de la lista actual (esto hace que nuestro código sea un poco más claro y más corto).
Hemos preparado el bucle for para que se ejecute su cuerpo length // 2 veces (esto funciona bien para listas con longitudes pares e impares, porque cuando la lista contiene un número impar de elementos, el del medio permanece intacto).
Hemos intercambiado el elemento i (desde el principio de la lista) por el que tiene un índice igual a (length-i-1) (desde el final de la lista); en nuestro ejemplo, for i igual a 0 a la (length-i-1) da 4; for i igual a 3, da 3: esto es exactamente lo que necesitábamos.

Notas

Las listas pueden ser iteradas mediante el uso del bucle for, por ejemplo:

my_list = ["blanco", "purpura", "azul", "amarillo", "verde"]

for color in my_list:
    print(color)

¿Cuál es la salida del siguiente fragmento de código?

lst = [1, 2, 3, 4, 5]
lst_2 = []
add = 0

for number in lst:
    add += number
    lst_2.append(add)

print(lst_2)

[1, 3, 6, 10, 15]

Ordenando listas simples - el ordenamiento de burbuja

my_list = [8, 10, 6, 2, 4]  # lista a ordenar
swapped = True  # Lo necesitamos verdadero (True) para ingresar al bucle while.

while swapped:
    swapped = False  # no hay intercambios hasta ahora
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True  # ¡ocurrió el intercambio!
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print(my_list)

# sort() ordena las listas

# ej 

lst = [5, 3, 1, 2, 4]
print(lst)

lst.sort()
print(lst)  # outputs: [1, 2, 3, 4, 5]

# ej con ususario

my_list = []
swapped = True
num = int(input("¿Cuántos elementos deseas ordenar?: "))

for i in range(num):
    val = float(input("Ingresa un elemento de la lista: "))
    my_list.append(val)

while swapped:
    swapped = False
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print("\nOrdenada:")
print(my_list)

# reverse () invierte la lista

lst = [5, 3, 1, 2, 4]
print(lst)

lst.reverse()
print(lst)  # salida: [4, 2, 1, 3, 5]

3.6.1.1 Operaciones en listas

list_2 = list_1
los dos nombres (list_1 y list_2) identifican la misma ubicación en la memoria de la computadora. Modificar uno de ellos afecta al otro, y viceversa.

rebanada:  es un elemento de la sintaxis de Python que permite hacer una copia nueva de una lista, o partes de una lista.

list_1 = [1]
list_2 = list_1[:]
list_1[0] = 2
print(list_2)


Su salida es [1].

Una de las formas más generales de la rebanada es la siguiente:

my_list[start:end]

Una rebanada de este tipo crea una nueva lista (de destino), tomando elementos de la lista de origen: los elementos de los índices desde el principio hasta el fin - 1.

Nota: no hasta el fin, sino hasta fin-1. Un elemento con un índice igual a fin es el primer elemento el cual no participa en la segmentación.


list_1 = [1]
list_2 = list_1[:]
list_1[0] = 2
print(list_2)

my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:3]
print(new_list)

consola

[1]
[8, 6]

start es el índice del primer elemento incluido en la rebanada.
end es el índice del primer elemento no incluido en la rebanada.

Así es como los índices negativos funcionan en las rebanadas:

my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:-1]
print(new_list)


El resultado del fragmento es:

[8, 6, 4]
salida


Si start especifica un elemento que se encuentra más allá del descrito por end (desde el punto de vista inicial de la lista), la rebanada estará vacía:

my_list = [10, 8, 6, 4, 2]
new_list = my_list[-1:1]
print(new_list)


La salida del fragmento es:

[]

La instrucción del descrita anteriormente puede eliminar más de un elemento de la lista a la vez, también puede eliminar rebanadas:

my_list = [10, 8, 6, 4, 2]
del my_list[1:3]
print(my_list)

También es posible eliminar todos los elementos a la vez:

my_list = [10, 8, 6, 4, 2]
del my_list[:]
print(my_list)

# in y not in

 Revisa la lista para verificar si un valor específico está almacenado dentro de la lista o no.

 elem in my_list
elem not in my_list


El primero de ellos (in) verifica si un elemento dado (el argumento izquierdo) está actualmente almacenado en algún lugar dentro de la lista (el argumento derecho) - el operador devuelve True en este caso.

El segundo (not in) comprueba si un elemento dado (el argumento izquierdo) está ausente en una lista - el operador devuelve True en este caso.

# ej quiniela

Supongamos que has elegido los siguientes números en la lotería: 3, 7, 11, 42, 34, 49.

Los números que han salido sorteados son: 5, 11, 9, 42, 3, 49.

La pregunta es: ¿A cuántos números le has atinado?

Este programa te dará la respuesta:

drawn = [5, 11, 9, 42, 3, 49]
bets = [3, 7, 11, 42, 34, 49]
hits = 0

for number in bets:
    if number in drawn:
        hits += 1

print(hits)


Nota:

La lista drawn almacena todos los números sorteados.
La lista bets almacena los números con que se juega.
La variable hits cuenta tus aciertos.
La salida del programa es: 4.

# ejercicio buscar repeticiones

Tu tarea es escribir un programa que elimine todas las repeticiones de números de la lista. El objetivo es tener una lista en la que todos los números aparezcan no más de una vez.

my_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]

lista = []

for i in my_list:
    if my_list[i] in my_list:
        del my_list[i]
#
print("La lista con elementos únicos:",)
print(my_list)

consola

La lista con elementos únicos:
[1, 4, 6, 2, 9]

# ej lista como almacena

list_1 = ["A", "B", "C"]
list_2 = list_1
list_3 = list_2

del list_1[0]
del list_2[0]

print(list_3)

consola
"C"

list_1 = ["A", "B", "C"]
list_2 = list_1
list_3 = list_2

del list_1[0]
del list_2

print(list_3)

consola
['B', 'C']
# PREGUNTAR!!

3.7.1.1 Listas en aplicaciones avanzadas

squares=[0,1,2,3,4,5,6]
odds = [x for x in squares if x % 2 != 0 ]
print (odds)


El fragmento crea una lista con solo los elementos impares de la lista squares.

# Naturaleza multidimensional de las listas: aplicaciones avanzadas

Para encontrar cualquier elemento de una lista bidimensional, debes usar dos coordenadas:

Una vertical (número de fila).
Una horizontal (número de columna).

Imagina que desarrollas una pieza de software para una estación meteorológica automática. El dispositivo registra la temperatura del aire cada hora y lo hace durante todo el mes. Esto te da un total de 24 × 31 = 744 valores. Intentemos diseñar una lista capaz de almacenar todos estos resultados.

Primero, debes decidir qué tipo de datos sería adecuado para esta aplicación. En este caso, sería mejor un float, ya que este termómetro puede medir la temperatura con una precisión de 0.1 ℃.

Luego tomarás la decisión arbitraria de que las filas registrarán las lecturas cada hora exactamente (por lo que la fila tendrá 24 elementos) y cada una de las filas se asignará a un día del mes (supongamos que cada mes tiene 31 días, por lo que necesita 31 filas). Aquí está el par apropiado de comprensiones(h es para las horas, dpara el día):

temps = [[0.0 for h in range(24)] for d in range(31)]


Toda la matriz está llena de ceros ahora. Puede suponer que se actualiza automáticamente utilizando agentes de hardware especiales. Lo que tienes que hacer es esperar a que la matriz se llene con las mediciones.

Ahora es el momento de determinar la temperatura promedio mensual del mediodía. Suma las 31 lecturas registradas al mediodía y divida la suma por 31. Puedes suponer que la temperatura de medianoche se almacena primero. Aquí está el código:

temps = [[0.0 for h in range(24)] for d in range(31)]
#
# La matriz se actualiza aquí.
#

total = 0.0

for day in temps:
    total += day[11]

average = total / 31

print("Temperatura promedio al mediodía:", average)


Nota: La variable day utilizada por el bucle for no es un escalar: cada paso a través de la matriz temps lo asigna a la siguiente fila de la matriz; Por lo tanto, es una lista. Se debe indexar con 11 para acceder al valor de temperatura medida al mediodía.

Ahora encuentra la temperatura más alta durante todo el mes, analiza el código:

temps = [[0.0 for h in range(24)] for d in range(31)]
#
# La matriz se actualiza aquí.
#

highest = -100.0

for day in temps:
    for temp in day:
        if temp > highest:
            highest = temp

print("La temperatura más alta fue:", highest)


Nota:

La variable day itera en todas las filas de la matriz temps.
La variable temp itera a través de todas las mediciones tomadas en un día.

Puntos Clave

1. La comprensión de listas te permite crear nuevas listas a partir de las existentes de una manera concisa y elegante. La sintaxis de una comprensión de lista es la siguiente:

[expression for element in list if conditional]

Este es un ejemplo de una comprensión de lista: el código siguiente crea una lista de cinco elementos con los primeros cinco números naturales elevados a la potencia de 3:

cubed = [num ** 3 for num in range(5)]
print(cubed)  # outputs: [0, 1, 8, 27, 64]

2. Puedes usar listas anidadas en Python para crear matrices (es decir, listas bidimensionales). Por ejemplo:

#  Una tabla de cuatro columnas y cuatro filas: un arreglo bidimensional (4x4)

table = [[":(", ":)", ":(", ":)"],
         [":)", ":(", ":)", ":)"],
         [":(", ":)", ":)", ":("],
         [":)", ":)", ":)", ":("]]

print(table)
print(table[0][0])  # outputs: ':('
print(table[0][3])  # outputs: ':)'

3. Puedes anidar tantas listas en las listas como desee y, por lo tanto, crear listas n-dimensionales, por ejemplo, arreglos de tres, cuatro o incluso sesenta y cuatro dimensiones. Por ejemplo:

# Cubo - un arreglo tridimensional (3x3x3)

cube = [[[':(', 'x', 'x'],
         [':)', 'x', 'x'],
         [':(', 'x', 'x']],

        [[':)', 'x', 'x'],
         [':(', 'x', 'x'],
         [':)', 'x', 'x']],

        [[':(', 'x', 'x'],
         [':)', 'x', 'x'],
         [':)', 'x', 'x']]]

print(cube)
print(cube[0][0][0])  # outputs: ':('
print(cube[2][2][0])  # outputs: ':)'

# Funciones

¿De dónde provienen las funciones?
En general, las funciones provienen de al menos tres lugares:

De Python mismo: varias funciones (como print()) son una parte integral de Python, y siempre están disponibles sin algún esfuerzo adicional del programador; se les llama a estas funciones integradas.
De los módulos preinstalados de Python: muchas de las funciones, las cuales comúnmente son menos utilizadas que las integradas, están disponibles en módulos instalados juntamente con Python; para poder utilizar estas funciones el programador debe realizar algunos pasos adicionales (se explicará acerca de esto en un momento).
Directamente del código: tu puedes escribir tus propias funciones, colocarlas dentro del código, y usarlas libremente.
Existe una posibilidad más, pero se relaciona con clases, se omitirá por ahora.

# definir una funcion

def function_name():
    function_body


Siempre comienza con la palabra reservada def (que significa definir).
Después de def va el nombre de la función (las reglas para darle nombre a las funciones son las mismas que para las variables).
Después del nombre de la función, hay un espacio para un par de paréntesis (ahorita no contienen algo, pero eso cambiará pronto).
La línea debe de terminar con dos puntos.
La línea inmediatamente después de def marca el comienzo del cuerpo de la función - donde varias o (al menos una) instrucción anidada será ejecutada cada vez que la función sea invocada; nota: la función termina donde el anidamiento termina, se debe ser cauteloso.

A continuación se definirá la función. Se llamará message â aquí está:

def message():
    print("Ingresa un valor: ")

La invocación de la función entre los dos mensajes:

def message():
    print("Ingresa un valor: ")

print("Se comienza aquí.")
message()
print("Se termina aquí.")

# return

Para lograr que las funciones devuelvan un valor (pero no solo para ese propósito) se utiliza la instrucción return (regresar o retornar).

sin expresion
Cuando se emplea dentro de una función, provoca la terminación inmediata de la ejecución de la función, y un retorno instantáneo (de ahí el nombre) al punto de invocación.

Consideremos la siguiente función:

def happy_new_year(wishes = True):
    print("Tres...")
    print("Dos...")
    print("Uno...")
    if not wishes:
        return
    
    print("¡Feliz año nuevo!")

con expresion
Existen dos consecuencias de usarla:

Provoca la terminación inmediata de la ejecución de la función (nada nuevo en comparación con la primer variante).
Además, la función evaluará el valor de la expresión y lo devolverá (de ahí el nombre una vez más) como el resultado de la función.

def boring_function():
    return 123

x = boring_function()

print("La función boring_function ha devuelto su resultado. Es:", x)

# none
Sus datos no representan valor razonable alguno; en realidad, no es un valor en lo absoluto; por lo tanto, no debe participar en ninguna expresión.

None es una palabra clave reservada.

Solo existen dos tipos de circunstancias en las que None se puede usar de manera segura:

Cuando se le asigna a una variable (o se devuelve como el resultado de una función).
Cuando se compara con una variable para diagnosticar su estado interno.
Al igual que aquí:

value = None
if value is None:
    print("Lo siento, no contienes ningún valor")


No olvides esto: si una función no devuelve un cierto valor utilizando una cláusula de expresión return, se asume que devuelve implícitamente None.

def strange_function(n):
    if(n % 2 == 0):
        return True

print (strange_function (5))

consola = None

# Ejercicio

Tu tarea es escribir y probar una función que toma un argumento (un año) y devuelve True si el año es un año bisiesto, o False si no lo es.

Parte del esqueleto de la función ya está en el editor.

Nota: también hemos preparado un breve código de prueba, que puedes utilizar para probar tu función.

El código utiliza dos listas: una con los datos de prueba y la otra con los resultados esperados. El código te dirá si alguno de tus resultados no es válido.

def is_year_leap(year):
    if year % 4 == 0:
        return True
    elif  year % 100 != 0:
        return True
    elif year % 400 == 0:
        return True
    else: 
        return False

test_data = [1900, 2000, 2016, 1987]
test_results = [False, True, True, False]
for i in range(len(test_data)):
	yr = test_data[i]
	print(yr,"->",end="")
	result = is_year_leap(yr)
	if result == test_results[i]:
		print("OK")
	else:
		print("Fallido")

# 4.3.1.7 LABORATORIO: ¿Cuántos días?: escribiendo y utilizando tus propias funciones

Tu tarea es escribir y probar una función que toma dos argumentos (un año y un mes) y devuelve el número de días del mes/año dado (mientras que solo febrero es sensible al valor year, tu función debería ser universal).

La parte inicial de la función está lista. Ahora, haz que la función devuelva None si los argumentos no tienen sentido.

Por supuesto, puedes (y debes) utilizar la función previamente escrita y probada (LABORATORIO 4.1.3.6). Puede ser muy útil. Te recomendamos que utilices una lista con los meses. Puedes crearla dentro de la función; este truco acortará significativamente el código.

def is_year_leap(year):
	if year % 4 != 0:
		return False
	elif year % 100 != 0:
		return True
	elif year % 400 != 0:
		return False
	else:
		return True

def days_in_month(year,month):

#condicion para que el valor ingresado sea valido

	if year < 1582 or month < 1 or month > 12:
		return None

#lista con dias en meses
	
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

#declaro res con el indice de days que sera el valor de month -1 porque el arr comienza desde 0

	res  = days[month - 1]

#si el mes es febrero y is_year_leap es True

	if month == 2 and is_year_leap(year):
		res = 29
	return res

test_years = [1900, 2000, 2016, 1987]
test_months = [ 2, 2, 1, 11]
test_results = [28, 29, 31, 30]
for i in range(len(test_years)):
	yr = test_years[i]
	mo = test_months[i]
	print(yr,mo,"-> ",end="")
	result = days_in_month(yr, mo)
	if result == test_results[i]:
		print("OK")
	else:
		print("Fallido")

4.3.1.8

Tu tarea es escribir y probar una función que toma tres argumentos (un año, un mes y un día del mes) y devuelve el día correspondiente del año, o devuelve None si cualquiera de los argumentos no es válido.

Debes utilizar las funciones previamente escritas y probadas. Agrega algunos casos de prueba al código. Esta prueba es solo el comienzo.

def is_year_leap(year):
	if year % 4 != 0:
		return False
	elif year % 100 != 0:
		return True
	elif year % 400 != 0:
		return False
	else:
		return True

def days_in_month(year, month):
	if year < 1582 or month < 1 or month > 12:
		return None
	days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	res  = days[month - 1]
	if month == 2 and is_year_leap(year):
		res = 29
	return res

def day_of_year(year, month, day):
	days = 0
	for m in range(1, month):
		md = days_in_month(year, m)
		if md == None:
			return None
		days += md
	md = days_in_month(year, month)
	if day >= 1 and day <= md:
		return days + day
	else:
		return None

print(day_of_year(2000, 12, 31))

4.3.1.9

Tu tarea es escribir una función que verifique si un número es primo o no.

La función:

Se llama is_prime.
Toma un argumento (el valor a verificar).
Devuelve True si el argumento es un número primo, y False de lo contrario.
Sugerencia: intenta dividir el argumento por todos los valores posteriores (comenzando desde 2) y verifica el resto: si es cero, tu número no puede ser un número primo; analiza cuidadosamente cuándo deberías detener el proceso.

Si necesitas conocer la raíz cuadrada de cualquier valor, puedes utilizar el operador **. Recuerda: la raíz cuadrada de x es lo mismo que x0.5.

Complementa el código en el editor.

Ejecuta tu código y verifica si tu salida es la misma que la nuestra.

Datos de prueba
Salida esperada:

2 3 5 7 11 13 17 19

def is_prime(num):
    for i in range(2, int(1 + num ** 0.5)):
        if num % i == 0:
            return False
    return True

for i in range(1, 20):
    if is_prime(i + 1):
        print(i + 1, end=" ")
print()

4.3.1.10

Tu tarea es escribir un par de funciones que conviertan l/100km a mpg (milas por galón), y viceversa.

Las funciones:

Se llaman liters_100km_to_miles_gallon y miles_gallon_to_liters_100km respectivamente.
Toman un argumento (el valor correspondiente a sus nombres).
Complementa el código en el editor.

Ejecuta tu código y verifica si tu salida es la misma que la nuestra.

Aquí hay información para ayudarte:

1 milla = 1609.344 metros.
1 galón = 3.785411784 litros.
Salida esperada:

60.31143162393162
31.36194444444444
23.52145833333333
3.9007393587617467
7.490910297239916
10.009131205673757

#1 milla (mile) = 1609.344 metros(metres)
#1 galón (gallon) = 3.785411784 litros(litres)
    
def liters_100km_to_miles_gallon(litres):
    gallons = litres / 3.785411784
    miles = 100 * 1000 / 1609.344
    return miles / gallons

def miles_gallon_to_liters_100km(miles):
    km100 = miles * 1609.344 / 1000 / 100
    litres = 3.785411784
    return litres / km100

print(liters_100km_to_miles_gallon(3.9))
print(liters_100km_to_miles_gallon(7.5))
print(liters_100km_to_miles_gallon(10.))
print(miles_gallon_to_liters_100km(60.3))
print(miles_gallon_to_liters_100km(31.4))
print(miles_gallon_to_liters_100km(23.5))

Puntos Clave

1. Puedes emplear la palabra clave reservada return para decirle a una función que devuelva algún valor.

2. El resultado de una función se puede asignar fácilmente a una variable, por ejemplo:

def wishes():
    return "¡Felíz Cumpleaños!"

w = wishes()

print(w)    # salida:¡Felíz Cumpleaños!

dos ejemplos:

# Ejemplo 1
def wishes():
    print("Mis deseos")
    return "Felíz Cumpleaños"

wishes()    # salida: Mis deseos


# Ejemplo 2
def wishes():
    print("Mis deseos")
    return "Felíz Cumpleaños"

print(wishes())

# salida: Mis deseos
#         Felíz Cumpleaños

3. Puedes usar una lista como argumento de una función, por ejemplo:

def hi_everybody(my_list):
    for name in my_list:
        print("Hola,", name)

hi_everybody(["Adán", "Juan", "Lucía"])

4. Una lista también puede ser un resultado de función, por ejemplo:

def create_list(n):
    my_list = []
    for i in range(n):
        my_list.append(i)
    return my_list

print(create_list(5))

4.4.1.1 Los Alcances en Python

El alcance de un nombre (por ejemplo, el nombre de una variable) es la parte del código donde el nombre es reconocido correctamente.
Una variable que existe fuera de una función tiene alcance dentro del cuerpo de la función.

Esta regla tiene una excepción muy importante = Una variable que existe fuera de una función tiene un alcance dentro del cuerpo de la función, excluyendo a aquellas que tienen el mismo nombre. El alcance de una variable existente fuera de una función solo se puede implementar dentro de una función cuando su valor es leído.

def my_function():
    var = 3
    print("¿Conozco a la variable?", var)


var = 2
my_function()
print(var)

¿Conozco a la variable? 3
2

# Global

Existe un método especial en Python el cual puede extender el alcance de una variable incluyendo el cuerpo de las funciones para poder no solo leer los valores de las variables sino también modificarlos.

Este efecto es causado por la palabra clave reservada llamada global:

global name
global name1, name2, ...

El utilizar la palabra reservada dentro de una función con el nombre o nombres de las variables separados por comas, obliga a Python a abstenerse de crear una nueva variable dentro de la función; se empleará la que se puede acceder desde el exterior.

def my_function():
    global var
    var = 2
    print("¿Conozco a aquella variable?", var)


var = 1
my_function()
print(var)

¿Conozco a aquella variable? 2
2

Al cambiar el valor del parámetro este no se propaga fuera de la función. Una función recibe el valor del argumento, no el argumento en sí. Esto es cierto para los valores escalares.

Puntos Clave

1. Una variable que existe fuera de una función tiene alcance dentro del cuerpo de la función. A menos que la función defina una variable con el mismo nombre.

Ejemplo 2:

def mult(x):
    var = 5
    return x * var


print(mult(7))    # salida: 35


Ejemplo 3:

def mult(x):
    var = 7
    return x * var


var = 3
print(mult(7))    # salida: 49

2. Una variable que existe dentro de una función tiene un alcance solo dentro del cuerpo de la función.

Ejemplo 4:

def adding(x):
    var = 7
    return x + var


print(adding(4))    # salida: 11
print(var)    # NameError

3. Se puede emplear la palabra clave reservada global seguida por el nombre de una variable para que el alcance de la variable sea global, por ejemplo:

var = 2
print(var)    # salida: 2


def return_var():
    global var
    var = 5
    return var


print(return_var())    # salida: 5
print(var)    # salida: 5

# diagonal invertida (\)

 Si se termina una línea de código con el, Python entenderá que la línea continua en la siguiente.

 # compactar funcion ej:

Regresará True si todos los lados pueden formar un triángulo, y False de lo contrario. En este caso, is_a_triangle es un buen nombre para dicha función.


Observa el código en el editor. Ahí se encuentra la función. Ejecuta el programa.

Parece que funciona perfectamente: estos son los resultados:

True
False
salida

def is_a_triangle(a, b, c):
    if a + b <= c:
        return False
    if b + c <= a:
        return False
    if c + a <= b:
        return False
    return True


print(is_a_triangle(1, 1, 1))
print(is_a_triangle(1, 1, 3))

¿Se podrá hacer más compacta?. Parece tener demasiadas palabras.

Esta es la versión más compacta:

def is_a_triangle(a, b, c):
    if a + b <= c or b + c <= a or c + a <= b:
        return False
    return True


print(is_a_triangle(1, 1, 1))
print(is_a_triangle(1, 1, 3))


¿Se puede compactar aun más?

Por supuesto, observa:

def is_a_triangle(a, b, c):
    return a + b > c and b + c > a and c + a > b


print(is_a_triangle(1, 1, 1))
print(is_a_triangle(1, 1, 3))

# Algunas funciones simples: factoriales

Se expresa con un signo de exclamación, y es igual al producto de todos los números naturales previos al argumento o número dado.

0! = 1 (¡Si!, es verdad.)
1! = 1
2! = 1 * 2
3! = 1 * 2 * 3
4! = 1 * 2 * 3 * 4
:
:
n! = 1 * 2 ** 3 * 4 * ... * n-1 * n

def factorial_function(n):
    if n < 0:
        return None
    if n < 2:
        return 1
    
    product = 1
    for i in range(2, n + 1):
        product *= i
    return product


for n in range(1, 6):  # probando
    print(n, factorial_function(n))


Observa como se sigue el procedimiento matemático, y como se emplea el bucle for para encontrar el producto.

Estos son los resultados obtenidos del código de prueba:

1 1
2 2
3 6
4 24
5 120

# Algunas funciones simples: Serie Fibonacci

El primer elemento de la secuencia es igual a uno (Fib1 = 1).
El segundo elemento también es igual a uno (Fib2 = 1).
Cada número después de ellos son la suman de los dos números anteriores (Fibi = Fibi-1 + Fibi-2).
Aquí están algunos de los primeros números en la serie Fibonacci:

fib_1 = 1
fib_2 = 1
fib_3 = 1 + 1 = 2
fib_4 = 1 + 2 = 3
fib_5 = 2 + 3 = 5
fib_6 = 3 + 5 = 8
fib_7 = 5 + 8 = 13

def fib(n):
    if n < 1:
        return None
    if n < 3:
        return 1

    elem_1 = elem_2 = 1
    the_sum = 0
    for i in range(3, n + 1):
        the_sum = elem_1 + elem_2
        elem_1, elem_2 = elem_2, the_sum
    return the_sum


for n in range(1, 10):  # probando
    print(n, "->", fib(n))

NO ENTENDI

#  Algunas funcione simples: recursividad

la recursividad es una técnica donde una función se invoca a si misma.

Tanto el factorial como la serie Fibonacci, son las mejores opciones para ilustrar este fenómeno.

La serie de Fibonacci es un claro ejemplo de recursividad. 

El número i se refiere al número i-1, y así sucesivamente hasta llegar a los primeros dos.

La segunda versión de la función fib() hace uso directo de la recursividad:

def fib(n):
    if n < 1:
        return None
    if n < 3:
        return 1
    return fib(n - 1) + fib(n - 2)

Si no se considera una condición que detenga las invocaciones recursivas, el programa puede entrar en un bucle infinito

Puntos Clave

1. Una función puede invocar otras funciones o incluso a sí misma. Cuando una función se invoca a si misma, se le conoce como recursividad, y la función que se invoca a si misma y contiene una condición de terminación (la cual le dice a la función que ya no siga invocándose a si misma) es llamada una función recursiva.

2. Se pueden emplear funciones recursivas en Python para crear funciones limpias, elegantes, y dividir el código en trozos más pequeños. Sin embargo, se debe tener mucho cuidado ya que es muy fácil cometer un error y crear una función la cual nunca termine. También se debe considerar que las funciones recursivas consumen mucha memoria, y por lo tanto pueden ser en ocasiones ineficientes.

Al emplear la recursividad, se deben de tomar en cuenta tanto sus ventajas como desventajas.

La función factorial es un ejemplo clásico de como se puede implementar el concepto de recursividad:


def factorial(n):
    if n == 1:    # El caso base (condición de terminación).
        return 1
    else:
        return n * factorial(n - 1)


print(factorial(4)) # 4 * 3 * 2 * 1 = 24

# 4.6.1.1 Tuplas y diccionarios

# tipos de secuencia y mutabilidad.

Un tipo de secuencia es un tipo de dato en Python el cual es capaz de almacenar más de un valor (o ninguno si la secuencia esta vacía), los cuales pueden ser secuencialmente (de ahí el nombre) examinados, elemento por elemento.

Una secuencia es un tipo de dato que puede ser escaneado por el bucle for.

La mutabilidad es una propiedad de cualquier tipo de dato en Python que describe su disponibilidad para poder cambiar libremente durante la ejecución de un programa.

Los datos mutables pueden ser actualizados libremente en cualquier momento, a esta operación se le denomina "in situ".

In situ es una expresión en Latín que se traduce literalmente como en posición, en el lugar o momento. Por ejemplo, la siguiente instrucción modifica los datos "in situ":

list.append(1)

Los datos inmutables no pueden ser modificados de esta manera.
 Una tupla es una secuencia inmutable. Se puede comportar como una lista pero no puede ser modificada en el momento.

 Lo primero que distingue una lista de una tupla es la sintaxis empleada para crearlas. Las tuplas utilizan paréntesis, mientras que las listas usan corchetes, aunque también es posible crear una tupla tan solo separando los valores por comas.

Observa el ejemplo:

tuple_1 = (1, 2, 4, 8)
tuple_2 = 1., .5, .25, .125


Se definieron dos tuplas, ambas contienen cuatro elementos.

A continuación se imprimen en consola:

tuple_1 = (1, 2, 4, 8)
tuple_2 = 1., .5, .25, .125

print(tuple_1)
print(tuple_2)


Esto es lo que se muestra en consola:

(1, 2, 4, 8)
(1.0, 0.5, 0.25, 0.125)
salida


Nota: cada elemento de una tupla puede ser de distinto tipo (punto flotante, entero, cadena, o cualquier otro tipo de dato).

Si se desea crear una tupla de un solo elemento, se debe de considerar el hecho de que, debido a la sintaxis (una tupla debe de poder distinguirse de un valor entero ordinario), se debe de colocar una coma al final:

one_element_tuple_1 = (1, )
one_element_tuple_2 = 1.,


El quitar las comas no arruinará el programa en el sentido sintáctico, pero serán dos variables, no tuplas.

No intentes modificar el contenido de la tupla ¡No es una lista!

La función len() acepta tuplas, y regresa el número de elementos contenidos dentro.
El operador + puede unir tuplas (ya se ha mostrado esto antes).
El operador * puede multiplicar las tuplas, así como las listas.
Los operadores in y not in funcionan de la misma manera que en las listas.

El diccionario es otro tipo de estructura de datos de Python. No es una secuencia (pero puede adaptarse fácilmente a un procesamiento secuencial) y además es mutable.

En el mundo de Python, la palabra que se esta buscando se denomina clave(key). La palabra que se obtiene del diccionario es denominada valor.

Esto significa que un diccionario es un conjunto de pares de claves y valores. Nota:

Cada clave debe de ser única. No es posible tener una clave duplicada.
Una clave puede ser un tipo de dato de cualquier tipo: puede ser un número (entero o flotante), o incluso una cadena.
Un diccionario no es una lista. Una lista contiene un conjunto de valores numerados, mientras que un diccionario almacena pares de valores.
La función len() aplica también para los diccionarios, regresa la cantidad de pares (clave-valor) en el diccionario.
Un diccionario es una herramienta de un solo sentido. Si fuese un diccionario español-francés, podríamos buscar en español para encontrar su contraparte en francés más no viceversa.

dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}
phone_numbers = {'jefe': 5551234567, 'Suzy': 22657854310}
empty_dictionary = {}

print(dictionary)
print(phone_numbers)
print(empty_dictionary)

La lista de todos los pares es encerrada con llaves, mientras que los pares son separados por comas, y las claves y valores por dos puntos.

Los diccionarios vacíos son construidos por un par vacío de llaves

Los diccionarios no son listas - no guardan el orden de sus datos, el orden no tiene significado (a diferencia de los diccionarios reales). El orden en que un diccionario almacena sus datos esta fuera de nuestro control.

Si deseas obtener cualquiera de los valores, debes de proporcionar una clave válida:

print(dictionary['gato'])
print(phone_numbers['Suzy'])

Si una clave es una cadena, se tiene que especificar como una cadena.
Las claves son sensibles a las mayúsculas y minúsculas: 'Suzy' sería diferente a 'suzy'.
El fragmento de código da las siguientes salidas:

chat
5557654321

No se puede utilizar una clave que no exista.

fortunadamente, existe una manera simple de evitar dicha situación. El operador in, junto con su acompañante, not in, pueden salvarnos de esta situación.

dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}
words = ['gato', 'león', 'caballo']

for word in words:
    if word in dictionary:
        print(word, "->", dictionary[word])
    else:
        print(word, "no está en el diccionario")


La salida del código es la siguiente:

gato -> chat
león no está en el diccionario
caballo -> cheval

dictionary = {
              "gato": "chat",
              "perro": "chien",
              "caballo": "cheval"
              }

phone_numbers = {'jefe': 5551234567,
                 'Suzy': 22657854310
                 }

# El método keys()

 retorna o regresa una lista de todas las claves dentro del diccionario. Al tener una lista de claves se puede acceder a todo el diccionario de una manera fácil y útil.

A continuación se muestra un ejemplo:

dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}

for key in dictionary.keys():
    print(key, "->", dictionary[key])

El código produce la siguiente salida:

gato -> chat
perro -> chien
caballo -> cheval

# La función sorted()

Que la salida este ordenada.

for key in sorted(dictionary.keys()):

La función sorted() hará su mejor esfuerzo y la salida será la siguiente:

caballo -> cheval
gato -> chat
perro -> chien

# items ()

Este método regresa una lista de tuplas (este es el primer ejemplo en el que las tuplas son mas que un ejemplo de si mismas) donde cada tupla es un par de cada clave con su valor.

Así es como funciona:

dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}

for spanish, french in dictionary.items():
    print(spanish, "->", french)


Nota la manera en que la tupla ha sido utilizada como una variable del bucle for.

El ejemplo imprime lo siguiente:

gato -> chat
perro -> chien
caballo -> cheval

# values ()

También existe un método denominado values(), funciona de manera muy similar al de keys(), pero regresa una lista de valores.

Este es un ejemplo sencillo:

dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}

for french in dictionary.values():
    print(french)

Esta es la salida esperada:

chat
chien
cheval

4.6.1.8 Tuplas y diccionarios
