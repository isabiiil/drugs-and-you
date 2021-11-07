from flask import Flask, request,json
import requests 
from bs4 import BeautifulSoup



app = Flask(__name__)





  
    

def getting_disease_name():
    r= requests.get('https://www.ncbi.nlm.nih.gov/mesh/?term=diabetes')
    soup = BeautifulSoup(r.text, 'html.parser')
    
    var_dict={}
    links=soup.find(class_= "title")
    
    var_dict['disease_related_name']=links.get_text()
        
    return(var_dict)







def getting_drug_names():
    r= requests.get('https://www.drugs.com/js/search/?id=livesearch-interaction-basic&s=aspirin')
    soup = BeautifulSoup(r.text, 'html.parser')


    links=soup.find('div',{'class':'ls-result'})
    

    new_list = [];
    var_dict={};
    for link in links:

        if  link.get_text() != '\n':
            var_dict['drug_name']=link.get_text()
            var_dict['id']=link.get('href').split('?')[1]
            dictionary_copy = var_dict.copy()
            new_list.append(dictionary_copy)
            
            
        
    return(new_list)


def getting_drug_disease_names():
    r= requests.get('https://www.drugs.com/interactions-check.php?drug_list=243-0')
    soup = BeautifulSoup(r.text, 'html.parser')


    links=soup.find('ul',{'class':'ddc-list-column-2'}).findAll('li',recursive=False)

    var_dict={}
    new_list=[]

    for link in links:
        print(link.get_text())
        var_dict['disease_name']=link.get_text()
        dictionary_copy = var_dict.copy()
        new_list.append(dictionary_copy)
    return(new_list)

def getting_disease_related_names():
    r= requests.get('https://www.ncbi.nlm.nih.gov/mesh/?term=diabetes')
    soup = BeautifulSoup(r.text, 'html.parser')
    new_list = [];
    var_dict={};
    links=soup.findAll(class_= "title")
    for link in links:
        var_dict['disease_related_name']=link.get_text()
        dictionary_copy = var_dict.copy()
        new_list.append(dictionary_copy)
    return(new_list)



@app.route('/api/disease_name', methods=['GET','POST'])
def disease_name():
    disease_name ='';
    if request.method == 'POST':
        disease_name =json.loads( request.data )
    
    return{
      # jsonify('name':json.dumps( testing))
       'disease_name' :[getting_disease_name()]
    }


@app.route('/api/drug_names', methods=['GET','POST'])
def drug_names():
    drug_name ='';
    if request.method == 'POST':
        drug_name =json.loads( request.data )
    
    return{
      # jsonify('name':json.dumps( testing))
       'drug_names' :[getting_drug_names()]
    }


@app.route('/api/disease_names', methods=['GET','POST'])
def disease_names():
    
    disease_name ='';
    if request.method == 'POST':
        disease_name =json.loads( request.data )
    
    return{
      # jsonify('name':json.dumps( testing))
       'disease_names' :[getting_drug_disease_names()]
    }

@app.route('/api/disease_related_names', methods=['GET'])
def disease_related_names():
    

    
    return{
      # jsonify('name':json.dumps( testing))
       'disease_related_names' :[getting_disease_related_names()]
    }



if __name__ == '__main__':
    app.run(debug=True)
