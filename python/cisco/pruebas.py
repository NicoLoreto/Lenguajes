from importlib.util import LazyLoader


dictionary = {"gato" : "chat", "perro" : "chien", "caballo" : "cheval"}
phone_numbers = {'jefe': 5551234567, 'Suzy': 22657854310}
empty_dictionary = {}

print(dictionary)
print(phone_numbers)
print(empty_dictionary)

tup = 1, 2, 3, 2, 4, 5, 6, 'vago', 'vago', 2, 8, 9
duplicates = tup.count('vago')

print(duplicates)    

d1 = {'Adam Smith': 'A', 'Judy Paxton': 'B+'}
d2 = {'Mary Louis': 'A', 'Patrick White': 'C'}
d3 = {}

for item in (d1, d2):
    # Escribe tu código aquí.
    d3.update(item)

print(d3)

colors = {
    "blanco": (255, 255, 255),
    "gris": (128, 128, 128),
    "rojo": (255, 0, 0),
    "verde": (0, 128, 0)
    }

for col, rgb in colors.items():
    print(col, ":", rgb)

    def fun(int=2,ou=4):
        return int + ou
    print (fun(3))

def f(x):
    return x + f(x-1)
print (f (3))

def f(x=0):
    return x
print (f (f(9)+1))

def fun (inp=2, out=3):
    return inp * out
print (f(out=4))

lista = ["hola", "chau", "nos", "vimo"]

def f (lista):
    del lista [1]
    lista[1]="adios"
 
print (f (lista[1]))

def f(a, b):
    return a ** a

print (f(8))

def fun (x):
    return x + fun (x-1)
print (fun(3))

print (1//2)

lista = [x for x in range (5)]
print (lista)

print (2%1)

def fun(x,y):
    return fun (x, y-1)

print (fun(3))

list=(1,2,3)
list.index(0)

print (1//5+1/5)


def fun (a,b):
    return a**b
print(fun(b=2))

def f (x):
    if x % 2 == 0:
        return 1
    else:
        return 2
print (f(f(2)))

lst = [i for i in range (0,-2)]

print (lst)

valor = 0
print (valor/len(valor))

num = [1,2,3]
vals=num
del vals [:]

print (vals)
print (num)

f = (1,2,3)
f.index(0)
print (f)

def fun1 (a):
    return None
def fun2 (a):
    return fun1(a)*fun1(a)

print (fun2(2))

def f(x,y):
    if x==y:
        return x
    else:
        return f(x,y-1)
print (f(0,3))

print(2%1)

print = 7

print(1//2)

print(4**(1/2))