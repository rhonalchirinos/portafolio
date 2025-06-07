import { FaPython } from 'react-icons/fa'

export default function Python() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center max-m">
        <FaPython className="text-8xl" />
        <br />
        <h1 className="text-4xl font-bold text-gray-800">PYTHON</h1>
      </div>

      <p className="pl-4 py-2 mt-16 text-sm font-medium text-white bg-yellow-500 rounded-md">
        Estas son mis notas de Python, espero te puedan servir.
      </p>

      <div className="text-justify shadow bg-white p-6 rounded-lg mt-6 font-light">
        <h3 className="font-roboto text-center text-balance text-4xl font-semibold tracking-tight text-gray-900">
          Camino a obtener la certificación PCEP-30-02 <br />
          <small className="text-lg text-gray-600">PCEP™ – Certified Entry-Level Python Programmer</small>
        </h3>

        <p className="my-4">
          ¿Por que deberia aprender Python ? Por que es omnipresente, multiplataforma, facil de aprender y por que
          necesitamos pagar facturas.
        </p>

        <h3 className="text-xl font-semibold py-3"> Fundamentos de Programación. </h3>
        <div className="pb-4 text-md">
          <p>
            <b>Lexico: </b> Conjunto de palabras que el lenguaje ofrece a sus usuarios bien sea un lengauje natural o
            artificial.
          </p>
          <p>
            <b>Sintaxis:</b> Conjutno de reglas utilizadas para precisar si una determinada cadena de palabras foram una
            oracion valida.
          </p>
          <br />
          <label className="text-md font-semibold text-cyan-500">Ejemplo</label>
          <pre className="bg-gray-100 p-3 mt-2 rounded text-sm">
            <code>
              Soy una Vaca &quot;sintaticamente correcta&quot; <br />
              Vaca una Soy &quot;sintaticamente incorrecta&quot;
            </code>
          </pre>

          <br />
          <label className="text-md font-semibold text-cyan-500">Ejemplo</label>
          <pre className="bg-gray-100 p-3 mt-2 rounded text-sm">
            <code>
              Soy una Vaca &quot;sintaticamente correcta&quot; <br />
              Vaca una Soy &quot;sintaticamente incorrecta&quot;
            </code>
          </pre>

          <p className="my-4 text-justify">
            <b>Semantica:</b> Conjuntao de reglas que determina si una frase tiene sentido
          </p>

          <br />
          <label className="text-md font-semibold text-cyan-500">Ejemplo</label>
          <pre className="bg-gray-100 p-3 mt-2 rounded text-sm">
            <code>
              Vivo en un cassa &quot;sintaticamente correcta&quot; <br />
              Una casa yo vivo &quot;sintaticamente incorrecta&quot; <br />
            </code>
          </pre>
        </div>

        <h3 className="title"> Interprete </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>
              El interprete lee el codigo fuente de una manera que es comun en la cultura occidental de izquierda a
              derecha y de arriba hacia abajo.
            </li>
            <li>
              Verifica si todas las lineas subsiguientes son correctas Alfabeticamente, Lexicamente, Sintaticamente y
              Semanticamente{' '}
            </li>
            <li>
              Comunca errores. <br />
              Nota: Los lenguajes diseñados para ser utilizados con un interpretador se le llaman lengaujes de scrpting
              y los programas codificados en dicho lenguaje se les llama scripts.
            </li>
          </ol>
        </div>

        <h3 className="title"> Python </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>Lenguaje de programacion de alto nivel</li>
            <li>Interpretado</li>
            <li>Orientado a Objeto</li>
            <li>Con semantica dinamica</li>
            <li>Generalizado</li>
            <li>Su nombre proviene de la serie Monty Python&apos;s Flying Circus </li>
            <li>Desarrollador por Guido van Rossum Nacido en 1956 en Haarlem, Paises Bajos</li>
          </ol>
        </div>

        <h3 className="title"> Obtetivos de Python </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>Facil e intuitivo</li>
            <li>Codigo abierto</li>
            <li>Tan comprensible como el Ingles</li>
            <li> Adecuado para tareas cotidianas</li>
          </ol>
        </div>

        <h3 className="title"> Versiones de python </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>
              Los Python 2,3 son mantenidos por Python software Foundation <b>Cpython</b> su prezisdente es Guido van
              Rossum <b>versiones canonicas</b>{' '}
            </li>
            <li>
              Cython: Extensión de C para Python. Permite escribir codigo en Python con cambios menores que se traducen
              en lenguaje C logrando un alto rendimiento, utiliza los tipos de datos del lenguaje c/c++
            </li>
            <li>
              Jython: Es un python escrito en Java. Jython puede comunicarse con la infraestructura existente en Java.
              Hasta la fecha siguien los estandares de python 2 y no tiene hya conforme a Python 3
            </li>
            <li>
              PyPy y RPython: Python escrito en Rpython &quot;Restricted Python&quot;, el cual es un subconjunto de
              Python. El codigo fuente de pypy no se ejecuta de manera interpretativa si no que se traduce a C y luego
              se ejecuta por separado.
              <br />
              Notas:
              <ol>
                <li>Podemos intercambiar Cpython por Pypy</li>
                <li>La velocidad de Pypy es sensiblemente superior al a del interprete de Cpython</li>
                <li>Es disponible para Python 2 y 3</li>
                <li>
                  Compatibilidad con funcionalidad core, La mayoria de los modulos estandar pero no con todas las
                  librerias
                </li>
              </ol>
            </li>
          </ol>
        </div>

        <h3 className="title"> La funcion Print </h3>
        <div className="section">
          <code className="codeinline">
            print(&quot;Hola Mundo&quot;, &quot;Python&quot;, end=&quot; &quot;, sep=&quot; & &quot;)
          </code>
          <p>
            <br />
            Notas: &quot;Hola Mundo&quot; y &quot;Python&quot; son argumentos posicionales, end y sep son argumentos de
            palabra clave. <br />
          </p>
        </div>

        <h3 className="title"> Literal </h3>
        <div className="section">
          <p>
            Un literal se refiere a datos cuyos valores estan determinados por el literal mismo y se utilizan dentro del
            codigo.
          </p>
        </div>

        <h3 className="title"> Numeros </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>
              Python 3.6 ha introduccion el guion bajo en los literales numericos para manejar la legibilidad{' '}
              <b>11_111_111</b>
            </li>
            <li>Los numeros positivos no requieren un signo positivo antepuesto, per es permitido</li>
            <li>
              Para valores octal en python agregamos <b>&quot;0O&quot;</b> ó <b>&quot;0o&quot;</b>.
              <pre>
                <code> 0o123, 0O123</code>
              </pre>
            </li>
            <li>
              Para valores Hexadecimales agregamos <b>&quot;0x&quot;</b> ó <b>&quot;0X&quot;</b>.
              <pre>
                <code>0x123, 0X123</code>
              </pre>
            </li>
            <li>Si utilizas print para imprimir lo hace en formato decional. </li>
            <li> Los flotantes en python se pueden escribir como .5 o 4. </li>
            <li>
              Notacion cientifica <br />
              <pre>
                <code>
                  3E8=3x10^8=300000000.0 # velocidad de la luz.
                  <br />
                  1E-22=1x10^-22 = 0.0000000000000000000001 # masa de un electron, constante de Plock
                </code>
              </pre>
            </li>
            <li>
              Python simpre va a preferir la representacion mas corta de un numero, por
              <pre>
                <code>3000E50 = 3E53</code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title"> Operadores Arismeticos </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>
              Exponenciacion:
              <code className="codeinline m-1">2**4</code> donde 2 es la base y 4 el exponente. <br />
              Notas:
              <ul className="list-disc px-10">
                <li>Cuando ambos argumentos son enteros el resultado es un entero.</li>
                <li>Cuando ambos argumentos son flotantes el resultado es un flotante</li>
                <li>En caso de que uno de los argumentos sea flotante el resultado es flotante</li>
                <li>
                  El operador <b>**</b> es asociativo de derecha a izquierda
                </li>
                <li>
                  El operador <b>**</b> tiene la mayor prioridad
                </li>
              </ul>
              <br />
            </li>
            <li>
              Divicion: Notas:
              <ul className="list-disc px-10">
                <li>EN caso de division &quot;/&quot; el resultado siempre es flotante</li>
                <li>Si necesitas que el valor sea entero debes utilizar // y olvidar el residuo de la operacion</li>
                <li>
                  El redondeo simpre va hacia abajo &quot;floor division&quot; ejemplo : <br />
                  <pre>
                    <code>
                      6 / 4 = -1,5 <br />
                      -6 // 4 = -2
                      <br />
                      -6 // 4 = -2.0
                      <br />
                    </code>
                  </pre>
                </li>
                <li>
                  Operador residuo Modulo
                  <code className="codeinline"> 6 % 4 = 2 </code>
                </li>
                <li>
                  Operadores y sus enlaces <br />
                  <pre>
                    <code>
                      9 % 6 % 2 = (9 % 6) % 2 = 1 <br />
                      Nota: enlazado de lado izquierdo
                    </code>
                  </pre>
                  <pre>
                    <code>
                      2 ** 3 ** 2 = 2 ** (3 ** 2) = 512 <br />
                      Nota: enlazado de lado derecho
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <h3 className="title"> Variables </h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>Python no impone restricciones en la longitud</li>
            <li>Python no solo soporta alfabeto latino si no caracteres especificos de otros alfabetos</li>
            <li>Deben comenzar con una letra</li>
          </ol>
        </div>

        <h3 className="title"> Pep-8 Style guide for Python code</h3>
        <div className="section">
          <ol className="list-decimal list-inside">
            <li>
              Nombre de varaibles y funciones deben estar en minusculas con palabras separadas por guiones bajos para
              mejorar la legibilidad
            </li>
            <li>
              Tambien es posible usar letras mixtas &quot;myVariable&quot; pero soo en contextos donde ese ya es el
              estilo predominante.
            </li>
          </ol>
        </div>

        <h3 className="title">Operadores Abreviados</h3>
        <div className="section">
          <pre>
            <code>
              i+=(2*J) <span className="text-gray-400"># seria i = i + 2 * j</span>
              <br />
              rem%=10 <span className="text-gray-400"> # seria rem = rem % 10 </span>
              <br />
              j-=10 <span className="text-gray-400"># seria rem = rem % 10 </span>
              <br />
            </code>
          </pre>
        </div>

        <h3 className="title">Replicacion de String </h3>
        <div className="section">
          <pre>
            <code>
              n = 3 <br />
              &quot;James&quot;*n <span className="text-gray-400">## JamesJamesJames </span> <br />
            </code>
          </pre>
          Notas: En caso de N sea &lt;&#61; 0 el resultado es una cadena vacia.
        </div>

        <h3 className="title">Ciclos </h3>
        <div className="section">
          <p>
            Los bucles while y for tienen una clausula <b>else</b> en python. La clausula <b>else</b> se ejecuta despues
            que el bucle finalice y cuando no haya terminado con un break
            <br />
          </p>
        </div>

        <h3 className="title">Logica de computadora </h3>
        <div className="section">
          <div className="flex">
            <div className="p-3 rounded border-solid border-2  mr-4">
              <b>Conjunción</b> <br />
              <ul className="mt-2 text-sm">
                <li> 0 and 0 = 0 </li>
                <li> 1 and 0 = 0 </li>
                <li> 0 and 1 = 0 </li>
                <li> 1 and 1 = 1</li>
              </ul>
            </div>
            <div className="p-3 rounded border-solid border-2  mr-4">
              <b> Disuyción </b> <br />
              <ul className="mt-2 text-sm">
                <li> 0 and 0 = 0 </li>
                <li> 1 and 0 = 1 </li>
                <li> 0 and 1 = 1 </li>
                <li> 1 and 1 = 1</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="title">Operadores Bit a Bit</h3>
        <div className="section">
          <p>
            Hay cuatro operadores que le permite manipular bits de datos individuales. se denomina operadores bit a bit.{' '}
            <br />
          </p>

          <ul className="list-disc mt-2 text-sm px-8 my-5">
            <li> & (ampersand) - Conjuncion a nivel de bits</li>
            <li> | (Barra vertical) - Disyucion a nivel de bits</li>
            <li> ~ (Tilde) - Negacion a nivel bits </li>
            <li> ^ (Intercalación) - ó exclusivo a nivel de bits (xor).</li>
          </ul>

          <div className="mb-4">
            <div className="rounded border p-2">
              <table className="border-slate border-spacing-2 text-center">
                <thead>
                  <tr>
                    <th className="py-1 px-4"> </th>
                    <th className="py-1 px-4"></th>
                    <th className="py-1 px-4 border border-gray-400">&</th>
                    <th className="py-1 px-4 border border-gray-400">|</th>
                    <th className="py-1 px-4 border border-gray-400">^</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                    <td className="border border-gray-400">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div className="rounded border p-2">
              <table className="border-slate border-spacing-2 text-center">
                <thead>
                  <tr>
                    <th className="py-1 px-4"></th>
                    <th className="py-1 px-4 border border-gray-400">~</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400">0</td>
                    <td className="border border-gray-400">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4">Notas: </p>
          <ol className="mx-10 list-disc">
            <li>
              Los operadores bit a bit tratan cada bit por separado y en procesadores modernos de 64bits se ejecutan las
              64 operaciones simultaneamente.
            </li>
            <li>
              <pre>
                <code>
                  i = 15 <br />
                  j = 20 <br />
                  log = i and j <span className="text-gray-400">#Operacion logica y su resultado es True</span>
                  <br />
                  bit = i & j<span className="text-gray-400"> # Es una operacion a nivel bit y su resultado s 6</span>
                  <br />
                  logneg = not i<span className="text-gray-400"> # Operacion logica valor False</span>
                  bitneg = ~ i<span className="text-gray-400"> # Operacion a nivel de bit y su valor es -16</span>
                </code>
              </pre>
            </li>
            <li>
              Forma abrebiada <br />
              <pre>
                <code>
                  x = x & y -- x &= y <br />
                  x = x | y -- x |= y <br />
                  x = x ^ y -- x ^= y <br />
                </code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title">Desplazamiento Izquierdo y derecho binario</h3>
        <div className="section">
          <ol className="list-decimal list-inside mx-5">
            <li> Se aplica solo a valores de numeros enteros </li>
            <li>
              Los operadores de cambio en Python son un par de digrafos &lt;&lt; y &gt;&gt; sugiriendo claramente en que
              direccion aplica el cambio.
            </li>
            <li>
              <pre>
                <code>
                  value &lt;&lt; bits
                  <span className="text-gray-400 mr-1"># Desplazamiento izquierda </span>
                  <br />
                  value &gt;&gt; bits
                  <span className="text-gray-400 mr-1"># Desplazamiento derecha</span>
                  <br />
                </code>
              </pre>
            </li>
            <li>
              Deplazamiento agrega ceros a la derecha y elimina los bits que se desplazan fuera del rango o los bits que
              se desplazan a la izquierda <br />
              <pre>
                <code>
                  17 &gt;&gt; 1 = 8.<span className="text-gray-400"># 17/2</span>
                  <br />
                  17 &lt;&lt; 2 = 68<span className="text-gray-400"># 17*(2**2)</span>
                  <br />
                </code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title">Representacion de numeros negativos</h3>
        <div className="section">
          <p>
            En python los numeros negativos se representan usando el complemento a dos. <br />
            pasos para convertir <br />
          </p>

          <ol className="list-disc mx-8 mt-3">
            <li>Convertir el numero a binario</li>
            <li>Invertir los bits &quot;complemento a 1&quot;</li>
            <li>Sumar 1 al resultado</li>
          </ol>

          <pre>
            <code>
              5 = 000101 <span className="text-gray-400"># representacion binaria </span>
              <br />
              <br />
              111010 <span className="text-gray-400"># Complemento a 1 </span> <br />
              <span className="ml-5">+ 1</span> <br />
              111011 = -5 <br />
            </code>
          </pre>
        </div>

        <h3 className="title">Listas</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              <b>append</b> agrega al final de la lista,
            </li>
            <li>
              <b>insert</b> insertart el elemento en la posicion indicada en caso de no existir la agregade ultimo y
              realiza un desplazamiento a la derecha.
            </li>
            <li>
              Rebanada: puedes hacer una copia de un arreglo o parte de ella <br />
              <ol>
                <li>
                  <b>start:</b> indica el indice del primer elemento incluido en la rebanada
                </li>
                <li>
                  <b>end:</b> indica el indice del primer elemento no incluido en la rebanada
                  <pre>
                    <code>
                      arr = [10,8,6,4,2] <br />
                      arr[1:3] <span className="text-gray-400"># [8,6]</span>
                      <br />
                      <br />
                      lista = [10,8,6,4,2] <br />
                      lista[-1:1] <span className="text-gray-400"># [8,6]</span>
                      <br />
                    </code>
                  </pre>
                </li>
                <li>
                  Si <b>start</b> especifica un elemento superior a <b>end</b> la lista es vacia.
                </li>
              </ol>
              <pre>
                <code>
                  lista2 = lista[:]
                  <span className="text-gray-400"> # produce una nueva lista </span> <br />
                  my_lista[start:end]
                  <span className="text-gray-400">
                    {' '}
                    # crea una nueva lista de destino tomando elementos de la lista origen.
                  </span>
                </code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title">Representación de números negativos</h3>
        <div className="section">
          <p>
            En Python los números negativos se representan usando el complemento a dos. <br />
            Pasos para convertir: <br />
          </p>

          <ol className="list-disc mx-8 mt-3">
            <li>Convertir el número a binario</li>
            <li>Invertir los bits &quot;complemento a 1&quot;</li>
            <li>Sumar 1 al resultado</li>
          </ol>

          <pre>
            <code>
              5 = 000101 <span className="text-gray-400"># representación binaria </span>
              <br />
              <br />
              111010 <span className="text-gray-400"># Complemento a 1 </span> <br />
              <span className="ml-5">+ 1</span> <br />
              111011 = -5 <br />
            </code>
          </pre>
        </div>

        <h3 className="title">Listas</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              <b>append</b> agrega al final de la lista,
            </li>
            <li>
              <b>insert</b> inserta el elemento en la posición indicada; en caso de no existir, lo agrega al final y
              realiza un desplazamiento a la derecha.
            </li>
            <li>
              Rebanada: puedes hacer una copia de un arreglo o parte de ella <br />
              <ol>
                <li>
                  <b>start:</b> indica el índice del primer elemento incluido en la rebanada
                </li>
                <li>
                  <b>end:</b> indica el índice del primer elemento no incluido en la rebanada
                  <pre>
                    <code>
                      arr = [10,8,6,4,2] <br />
                      arr[1:3] <span className="text-gray-400"># [8,6]</span>
                      <br />
                      <br />
                      lista = [10,8,6,4,2] <br />
                      lista[-1:1] <span className="text-gray-400"># [8,6]</span>
                      <br />
                    </code>
                  </pre>
                </li>
                <li>
                  Si <b>start</b> especifica un elemento superior a <b>end</b>, la lista es vacía.
                </li>
              </ol>
              <pre>
                <code>
                  lista2 = lista[:]
                  <span className="text-gray-400"> # produce una nueva lista </span> <br />
                  my_lista[start:end]
                  <span className="text-gray-400">
                    {' '}
                    # crea una nueva lista de destino tomando elementos de la lista origen.
                  </span>
                </code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title">Funciones</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Una variable que existe fuera de una función tiene alcance dentro del cuerpo de la función, excluyendo
              aquellas que tienen el mismo nombre.
            </li>
            <li>
              <b>Global: </b> existe un método especial de Python el cual puede extender el alcance de una variable
              incluyendo el cuerpo de las funciones para leer y modificar los valores de las variables.
              <pre>
                <code>
                  def my_function(): <br />
                  <span className="ml-5">
                    global var <br />
                    var = 2 <br />
                    print(var) <br />
                  </span>
                  <br />
                  var = 1 <br />
                  my_function() <br />
                  print(var) <br />
                </code>
              </pre>
            </li>
            <li>
              El valor máximo de profundidad de recursión (recursion depth) es 1000, este valor puede ser modificado.
            </li>
          </ol>
        </div>

        <h3 className="title">Tipos de secuencia y Mutabilidad</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Tipo de secuencia es un tipo de datos en Python el cual es capaz de almacenar más de un valor o ninguno;
              si la secuencia varía, los actuales pueden ser secuencialmente examinados.
            </li>
            <li>Los datos mutables pueden ser actualizados libremente en cualquier momento &quot;in situ&quot;.</li>
            <li>
              in situ: es una expresión en latín que se traduce literalmente como posición, en el lugar o momento.
            </li>
            <li>Los datos inmutables no pueden ser modificados de esta manera.</li>
          </ol>
        </div>

        <h3 className="title">Tuplas</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>Una tupla es una secuencia inmutable.</li>
            <li>Cada elemento de una tupla puede ser de distinto tipo.</li>
            <li>
              Para crear una tupla de un solo elemento <code className="codeinline">tupla = (1,)</code> &quot;si se
              omite la coma será una variable&quot;.
            </li>
          </ol>
        </div>

        <h3 className="title">Diccionarios</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              El método <b>popitem</b> elimina y retorna el último valor del diccionario.
            </li>
            <li>A partir de Python 3.7 los diccionarios conservan el orden de inserción.</li>
            <li>
              Si el diccionario está vacío lanza un error <b>KeyError</b>.
            </li>
          </ol>
        </div>

        <h3 className="title">Excepciones</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Es mejor pedir perdón que pedir permiso. Es mejor manejar un error cuando ocurre que tratar de evitarlo.
            </li>
            <li>
              Los argumentos con los cuales instanciamos a dicha clase se guardan en la variable args y esta es de tipo
              tupla.
              <pre>
                <code>
                  try: <br />
                  <span className="ml-5"> 1/0 </span> <br />
                  except ZeroDivisionError as e: <br />
                  <span className="ml-5">
                    print(e.args) <span># es de tipo tupla</span>
                  </span>
                  <br />
                </code>
              </pre>
            </li>
          </ol>
        </div>

        <h3 className="title">Funciones</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Una variable que existe fuera de una funcion tiene alcance dentro del cuerpo de la funcion excluyendo
              aquellas qeu tienen el mismo nombre.
            </li>
            <li>
              <b>Global: </b> existe un metodo expecial de python el cual puede extender el alcance de una variable
              incluyendo el cuerpo de las funciones para leer y modificar los valores de las variables.
              <pre>
                <code>
                  def my_function(): <br />
                  <span className="ml-5">
                    global var <br />
                    var = 2 <br />
                    print(var) <br />
                  </span>
                  <br />
                  var = 1 <br />
                  my_function() <br />
                  print(var) <br />
                </code>
              </pre>
            </li>
            <li>
              El valor maximo de profundida de recursion. (recursion depth) es 1000, este valor puede ser modificado.
            </li>
          </ol>
        </div>

        <h3 className="title">Tipos de secuencia y Mutabilidad </h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Tipo de secuencia es un tipo de datos en Python el caul es capaz de almacenar mas de un valor o ninguno,
              si la secuencia esta varia los acuales pueden ser secuencialmente examinados.
            </li>
            <li>Los datos mutables pueden ser actualizados libremente en cualquier momento &quot;in situ&quot;</li>
            <li>
              in situ: es una expresion en Latim que se traduce literalmente como posicion, en el lugar o momento.
            </li>
            <li>Los datos inmutables no pueden ser modificados de esta manera</li>
          </ol>
        </div>

        <h3 className="title">Tuplas</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>Una tupla es una secuencia inmutable.</li>
            <li>Cada elemento de una tupla puede ser de distinto tipo</li>
            <li>
              Para crear una tupla de un solo elemento <code className="codeinline">tupla = (1,)</code> &quot;si se
              omite la coma sera una variable&quot;
            </li>
          </ol>
        </div>

        <h3 className="title">Diccionarios</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              El metodo <b>popitem</b> elimina y retorna el ultimo valor del diccionario.
            </li>
            <li>A partir de Python 3.7 los diccionarios conservan el orden de insercion.</li>
            <li>
              Si el diccionario esta vacio lanza un error <b>KeyError</b>
            </li>
          </ol>
        </div>

        <h3 className="title">Exceptions</h3>
        <div className="section">
          <ol className="list-disc mx-8 mt-3">
            <li>
              Es mejor pedir perdon que perdir permiso, Es mejor manejar un error cuando ocurre que tratar de evitarlo
            </li>
            <li>
              Los argumentos con los cuales instanciamos a dicha clase se guarda en la variable args y esta es de tipo
              tupla
              <pre>
                <code>
                  try: <br />
                  <span className="ml-5"> 1/0 </span> <br />
                  except ZeroDivisionError as e: <br />
                  <span className="ml-5">
                    print(e.args) <span># es de tipo tupla</span>
                  </span>
                  <br />
                </code>
              </pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
