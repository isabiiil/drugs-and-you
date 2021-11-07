from flask import Flask, request,json
import requests
import codecs;
from bs4 import BeautifulSoup



app = Flask(__name__)





  
    

def getting_disease_name(disease_name):
    
    r= requests.get('https://www.ncbi.nlm.nih.gov/mesh/?term='+disease_name)
    
   
    soup = BeautifulSoup(r.text, 'html.parser')
    var_dict={}
    links=soup.find(class_= "title")
    if links is None:
        return('Sorry try again')
    var_dict['disease_related_name']=links.get_text()
    
    return(var_dict)







def getting_drug_names(drug_name):
    requestString = "https://www.drugs.com/js/search/?id=livesearch-interaction-basic&s="+drug_name;
    
    
    r= requests.get(requestString);
    soup = BeautifulSoup(r.text, 'html.parser')

    links=soup.find('div',{'class':'ls-result'})
    if links is None:
        return('Sorry try again')

    new_list = [];
    var_dict={};
    for link in links:
        
        if  link.get_text() != '\n':
            var_dict['drug_name']=link.get_text()
            if link.get('href') != None:
                var_dict['id']=link.get('href').split('?')[1]
                dictionary_copy = var_dict.copy()
                new_list.append(dictionary_copy)
            else:
                return ('Sorry try again')
            
        
    return(new_list)


def getting_drug_disease_names(drug_disease_names):
    r= requests.get('https://www.drugs.com/interactions-check.php?'+drug_disease_names)
    
    soup = BeautifulSoup(r.text, 'html.parser')


    linkss=soup.find('ul',{'class':'ddc-list-column-2'})
    if linkss is None:
        return('Sorry try again')
    links=linkss.findAll('li',recursive=False)

    var_dict={}
    new_list=[]

    for link in links:
        print(link.get_text())
        var_dict['disease_name']=link.get_text()
        dictionary_copy = var_dict.copy()
        new_list.append(dictionary_copy)
    return(new_list)

def getting_disease_related_names(disease_related_name):
    #disease_name = disease_namereplace(' ','+')
    
    r= requests.get('https://www.ncbi.nlm.nih.gov/mesh/?term='+disease_related_name)
    soup = BeautifulSoup(r.text, 'html.parser')
    new_list = [];
    var_dict={};
    links=soup.findAll(class_= "title")
    if links is None:
        return('Sorry try again')
    for link in links:
        var_dict['disease_related_name']=link.get_text()
        dictionary_copy = var_dict.copy()
        new_list.append(dictionary_copy)
    if not new_list:
        return('Sorry try again')
    return(new_list[0])



@app.route('/api/disease_name', methods=['GET','POST'])
def disease_name():
    disease_name ='';
    
    if request.method == 'POST':
        disease_name =json.loads( request.data.decode('utf-8'))
    
    return{
      # jsonify('name':json.dumps( testing))
       'disease_name' :[getting_disease_name( disease_name['data'])]
        
    }


@app.route('/api/drug_names', methods=['GET','POST'])
def drug_names():
    drug_name ='';
    if request.method == 'POST':
        drug_name =json.loads(request.data.decode('utf-8'));
        return{
            # jsonify('name':json.dumps( testing))
            'drug_names' :[getting_drug_names(drug_name['data'])]
        }


@app.route('/api/drug_disease_names', methods=['GET','POST'])
def drug_disease_names():
    
    drug_disease_name ='';
    if request.method == 'POST':
        drug_disease_name =json.loads( request.data.decode('utf-8') )
    return{
      # jsonify('name':json.dumps( testing))
     'drug_disease_names' :[getting_drug_disease_names(drug_disease_name['data'])]
    }

@app.route('/api/disease_related_names', methods=['GET','POST'])
def disease_related_names():
    

    disease_related_names =json.loads( request.data.decode('utf-8') )
    return{
      # jsonify('name':json.dumps( testing))
       'disease_related_names' :[getting_disease_related_names(disease_related_names['data'])]
    }



if __name__ == '__main__':
    app.run(debug=True)
