#personagem
personagem=input("guerreiro\nmago\narqueiro\nescolha um personagem acima" )
if personagem == "guerreiro":
    print("você escolheu o guerreiro,sua vida é 100 e seu dano médio é 50")
elif personagem== "mago":
    print("você escolheu o mago,sua vida é 50 e seu dano médio é 80")
elif personagem == "arqueiro":
    print("você escolheu o arqueiro,sua vida é 80 e seu dano médio é 60")
else:
    while personagem != "guerreiro" and personagem != "mago" and personagem != "arqueiro":
        print("personagem inesistente ,escolha outro")
        personagem=input("guerreiro\nmago\narqueiro\nescolha um personagem acima" ) 
if nivel >=10:
    print("você entrou no modo ranqueado")




