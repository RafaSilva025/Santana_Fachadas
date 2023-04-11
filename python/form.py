import re


def validar_nome(nome):
    if len(nome) < 3:
        return False
    return True


def validar_email(email):
    padrao_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(padrao_email, email))


def validar_telefone(telefone):
    padrao_telefone = r'^\(\d{2}\) \d{4,5}-\d{4}$'
    return bool(re.match(padrao_telefone, telefone))


nome = input("Digite seu nome: ")
email = input("Digite seu email: ")
telefone = input("Digite seu telefone (xx) xxxx-xxxxx: ")

if not validar_nome(nome):
    print("Nome inválido!")
if not validar_email(email):
    print("Email inválido!")
if not validar_telefone(telefone):
    print("Telefone inválido!")
