import pandas as pd
from pyodide.ffi import create_proxy



df =pd.read_csv('book1.csv')
def makeData(data):
  global df
  if(data=="book1"):
    df=pd.read_csv('book1.csv')
  elif(data=="book2"):
    df=pd.read_csv('book2.csv')
  elif(data=="book3"):
    df=pd.read_csv('book3.csv')
  elif(data=="book4"):
    df=pd.read_csv('book4.csv')
  else:
    df=pd.read_csv('book5.csv')

  dfDesc = pd.DataFrame(columns=['Source'],
                      data=df["Source"].unique())
  # print(df.shape)
  dfDesc['Count_Column'] = dfDesc['Source'].map(df['Source'].value_counts())
  dfA = dfDesc.sort_values('Count_Column',ascending=False).head(10)
  name = list(dfA["Source"])
  count = list(dfA["Count_Column"])
  return name, count

