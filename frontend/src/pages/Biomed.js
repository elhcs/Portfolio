import React, { useState, useEffect } from 'react';
import Footer from '../components/footer_new'
import styles from '../components/Articlecomp.module.css';
import CodeCell from "../components/codecell";  // Adjust the path to where CodeCell.js is located


const isMobilee = window.innerWidth < 768;
const MyComponent = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState([
    "elxdesign.gif"
    // Add more image URLs as needed
  ]);

  const textElements = [
    ["MUSIC GENERATION WITH LSTM", "Think of training a neural network to absorb Bach’s Cello Suite and compose new music—like creating tunes with the same flair as the Powerpuff Girls were made in the lab!"]
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textElements.length);
    }, 12000); // Changes text every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const navigateTo = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
              <h1 style={{  marginBottom:"10%", margin:"10%", color:"white"}}>{textElements[currentIndex][0]}</h1>
              <p style={{  margin:"10%", color:"white"}}>{textElements[currentIndex][1]}</p>
            </div>
            {/* <div className={styles.bottomText}>
              <p>{textElements[currentIndex][1]}</p>
            </div> */}
          </div>
          <div className={styles.indicatorContainer}>
            {textElements.map((_, index) => (
              <div
                key={index}
                onClick={() => navigateTo(index)}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              ></div>
            ))}
          </div>
        </div>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

          <img src={imageList[currentIndex]} style={{ width:'100%'}} alt="Placeholder" />
        </div>
      </div>

                  {/* Main content flex container */}
                  <div className="main-content" style={{
          display: 'flex',
          flexDirection: 'row', // Default for larger screens
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0px',
          flexWrap: 'wrap'  // Ensure wrapping when space is tight
        }}>
          
          {/* Left content (set flex-basis for side by side) */}
          <div className="bodypage" style={{ padding: '-20px', maxWidth: '95%', margin: 'auto' }}>
          

            <div style={{ marginLeft:'-20px',padding: '20px', maxWidth: '95%', margin: 'auto' }}>
            <h1>Deep Learning/ RNN+Transformer in Keras</h1>
            <p>Version: 2024/10/02 (added Transformer, changed model definition to classes - as in PyTorch)</p>
            <p>Version: 2023/09/19 (changed to tensorflow.keras, changed figures, code to function)</p>
            <p>For any remark or suggestion, please feel free to contact me.</p>

            <h2>Objective</h2>
            <p>
                We will train a network to learn a language model and then use it to generate new sequences. Instead of training the language model on text-documents (as it is the case in most examples) we will train it to learn the language of the music of Johann Sebastian Bach.
            </p>
            <p>
                For this, we will learn how J. S. Bach's "Cello suite" have been composed. 
                <a href="https://example.com/cello_suite_link" target="_blank" rel="noopener noreferrer"> Here is an example of a "Cello suite".</a>
            </p>
            <div className="code-wrapper">
      <div className="code-toolbar">
      <audio className="code-audio" controls>
        <source src="path_to_your_audio_file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
               <button className="copy-button" >
          Copy code
        </button>
      </div>
      <pre className="code-block">
        
      </pre>
    </div>
            <h2>Questions</h2>
            <p>In the bottom part of this lab, you will have to answer a set of questions. Answers to those only necessitate a couple of sentences.</p>

            <h2>Import Packages</h2>
            <CodeCell
            codeString= {`
! pip install pretty_midi

import os
import pretty_midi
from scipy.io import wavfile
import IPython
import tensorflow as tf
from tensorflow.keras import backend as K
from tensorflow.keras import layers, models
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Input, Dense, LSTM, Flatten, Dropout, Activation
from tensorflow.keras.callbacks import EarlyStopping

! pip install keras_nlp
from keras_nlp.layers import TransformerDecoder

import numpy as np
import matplotlib.pyplot as plt
import glob

student = True`}
            />

            <h2>Get the Data</h2>
            <CodeCell
               codeString={`
n_x = 79
max_midi_T_x = 1000
model_T_x = 100
model_n_a = 32`}
            />

            <h2>Collect data to create the language model</h2>
            <CodeCell
            codeString={`DIR = './'
            import urllib.request
            midi_file_l = ['cs1-2all.mid', 'cs5-1pre.mid', 'cs4-1pre.mid', 'cs3-5bou.mid', 'cs1-4sar.mid', 'cs2-5men.mid', 'cs3-3cou.mid', 'cs2-3cou.mid', 'cs1-6gig.mid', 'cs6-4sar.mid', 'cs4-5bou.mid', 'cs4-3cou.mid', 'cs5-3cou.mid', 'cs6-5gav.mid', 'cs6-6gig.mid', 'cs6-2all.mid', 'cs2-1pre.mid', 'cs3-1pre.mid', 'cs3-6gig.mid', 'cs2-6gig.mid', 'cs2-4sar.mid', 'cs3-4sar.mid', 'cs1-5men.mid', 'cs1-3cou.mid', 'cs6-1pre.mid', 'cs2-2all.mid', 'cs3-2all.mid', 'cs1-1pre.mid', 'cs5-2all.mid', 'cs4-2all.mid', 'cs5-5gav.mid', 'cs4-6gig.mid', 'cs5-6gig.mid', 'cs5-4sar.mid', 'cs4-4sar.mid', 'cs6-3cou.mid']
            for midi_file in midi_file_l:
              #if os.path.isfile(DIR + midi_file) is None:
              urllib.request.urlretrieve ("http://www.jsbach.net/midi/" + midi_file, DIR + midi_file)
            
            midi_file_l = glob.glob(DIR + 'cs*.mid')
            print(midi_file_l)`}
            />

<h2>Read and convert all MIDI files</h2>
        <p>We illustrate here the content of a MIDI file. Each file contains a list of notes to be played over time. Each note is characterized by
its pitch (in MIDI note number, la3=A4=69)
its start time (when to start playing the note)
its stop time (when to stop playing the note)
its duration (which is computed as stop-start)</p>
<CodeCell codeString={ `--- Read a single MIDI file
midi_data = pretty_midi.PrettyMIDI(midi_file_l[0])
# --- Display the note pitch, start, end and duration
for note in midi_data.instruments[0].notes[:20]:
    print('pitch: %d, start: %f, end: %f, duration: %f' % (note.pitch, note.start, note.end, note.end-note.start))`}/>
<p>We read each MIDI file and for each only retains the pitch (we name it note) information. We convert the list of note to a one-hot-encoding matrix X_ohe of dimensions (midi_T_x, n_x) where n_x is the number of possible musical notes. The length of the sequences midi_T_x can vary from one sequence to the other.</p>
<CodeCell codeString={`def F_convert_midi_2_list(midi_file_l, max_midi_T_x):
    """
    read the notes within all midi files
    truncate the length if > max_midi_T_x

    Parameters
    ----------
    midi_file_l:
        list of MIDI files
    max_midi_T_x:
        the maximum number of notes we read in a given midi_file

    Returns
    -------
    X_list:
        a list of np.array X_ohe of size (midi_T_x, n_x) which contains the one-hot-encoding representation of notes over time
    """
    X_list = []

    for midi_file in midi_file_l:
        # --- read the MIDI file
        midi_data = pretty_midi.PrettyMIDI(midi_file)
        note_l = [note.pitch for note in midi_data.instruments[0].notes]
        midi_T_x = len(note_l) if len(note_l) < max_midi_T_x else max_midi_T_x
        # --- convert to one-hot-encoding
        if student:
            # --- START CODE HERE (01)
            X_ohe = np.zeros((midi_T_x, n_x))
            for t, note in enumerate(note_l):
                if t < midi_T_x:
                 X_ohe[t-1,note-1] = 1
            # --- END CODE HERE

        # --- add X_ohe to the list X_list
        X_list.append(X_ohe)

    return X_list`}/>
    <h2>Display the set of notes over time for a specific track</h2>
    <CodeCell codeString={`plt.figure(figsize=(10, 4))
plt.imshow(X_list[2].T, aspect='auto')
plt.set_cmap('gray_r')
plt.grid(True)`}/>
<img style={{ maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0'}} src="/sounddataviz.png" alt="Description of image" />
<h2>Data conversion for the training of language model</h2>
<p>
  We want to train a language model, i.e. a model that predicts a note given past notes: 
  p(𝑥&lt;𝜏&gt; | 𝑥&lt;1&gt;, 𝑥&lt;2&gt;, ..., 𝑥&lt;𝜏−1&gt;). A simple way to do this is to create 
  (for each MIDI sequence and for each possible starting note t within this MIDI sequence) two sequences: 
  an input sequence 𝑥: which contains a sub-sequence of length model_T_x; this sub-sequence ranges from t to t+model_T_x-1.
  an output sequence 𝑦: which contains the same sub-sequence but delayed by one time step, ranging from t+1 to t+model_T_x.
</p>
<img style={{ maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0', padding:"15px" }} src="/transformers.png" alt="Description of image" />
<CodeCell codeString={`def F_convert_list_2_data(X_list, model_T_x, sequence_step=1):
    """
    convert X_list to input X_train and output Y_train training data

    Parameters
    ----------
    X_list:
        a list of np.array X_ohe of size (midi_T_x, n_x) which contains the one-hot-encoding representation of notes over time

    Returns
    -------
    X_train:
        the set of all m input sequences; np.array of shape (m, model_T_x, n_x)
    Y_train:
        the set of all m output sequences; np.array of shape (m, model_T_x, n_x)

            note:   m is the total number of training items,
                    it is be larger than the number of MIDI files since we use several starting time t in each MIDI file
    """

    if student:
        # --- START CODE HERE (02)
        X_train_list = [X_list[f][t:t+model_T_x,:] for f in range(len(X_list)) for t in range(0, X_list[f].shape[0]-model_T_x, sequence_step)]
        Y_train_list = [X_list[f][t+1:t+model_T_x+1,:] for f in range(len(X_list)) for t in range(0, X_list[f].shape[0]-model_T_x, sequence_step)]
        # --- END CODE HERE

    X_train = np.asarray(X_train_list)
    Y_train = np.asarray(Y_train_list)

    return X_train, Y_train`}/>
<img style={{maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0' }}  src="/x_trainbla.png" alt="Description of image" />
<h2>Training the language model using LSTM</h2>
<p>To learn the language model we will train an RNN with input X_train and output Y_train.
For each example, we give to the network a sequence of notes from t to t+model_T_x-1 and ask the network to predict the following note of each sequence t+1 to t+model_T_x. We already created those in X_train and Y_train.</p>
<CodeCell codeString={`# --- Create the model
K.clear_session()

if student:
    # --- START CODE HERE (03)
    class BachNet(tf.keras.Model):
        def __init__(self, n_x, model_T_x, model_n_a):
            super(BachNet, self).__init__()

            self.lstm1 = LSTM(model_n_a, return_sequences=True)

            self.dropout1 = Dropout(0.3)

            self.lstm2 = LSTM(model_n_a, return_sequences=True)

            self.dropout2 = Dropout(0.3)

            self.lstm3 = LSTM(model_n_a, return_sequences=True)

            self.dense1 = Dense(model_n_a, activation='tanh')

            self.dropout3 = Dropout(0.3)


            self.output_layer = Dense(n_x, activation='softmax')


        def call(self, X):

            X = self.lstm1(X)
            X = self.dropout1(X)

            X = self.lstm2(X)
            X = self.dropout2(X)

            X = self.lstm3(X)

            X = self.dense1(X)
            X = self.dropout3(X)

            X = self.output_layer(X)

            return X

    # --- END CODE HERE

model = BachNet(n_x, model_T_x, model_n_a)
print(X_train.shape)
print(model(X_train[:64,:,:]).shape)
print(model.summary())`}/>
<h2>Compile Model</h2>
<p>We now compile the network (model.compile) specifying the loss to be optimized (we deal here with a multi-class problem), how to minimize the loss (here we will use adam optimizer) and indicate what we want to display during training (here we also ask to display the accuracy).
As in scikit-learn we then fit the model (model.fit), i.e. we train its parameters, by providing the input and the ground-truth output; we also specifify the number of epochsto use (one epoch correspond to having see the whole training-set, hence it corresponds to several mini-batches, hence to several optimization steps) and the batch_size.
We will also use early-stopping to avoid over-fitting. early-stopping stops the training when the loss on the validation-set stops decreasing. For this we need to create a validation set (we do this by splitting the training-set in two, validation_split). We then define a callback (something that keras needs to monitor during training, here we monitor the loss on validation-set, monitor='val_loss). patience=3 indicates that we wait for 3 epochs after the criteria is not valid.</p>
<CodeCell codeString={`# --- Compile and fit the model
callback = EarlyStopping(monitor='val_loss', patience=3)
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
model.fit(X_train, Y_train, epochs=100, batch_size=16, validation_split=0.1, shuffle=True, callbacks=[callback])`}/>
<h2>Generating a new sequence by sampling the language model</h2>
<p>{
      `To generate a new sequence from the language model,
we first randomly choose a starting note among the n_x possible ones. For this you can use np.random.multinomial and either
assume an uniform distribution
compute a prior note distribution (you can do this by computing the number of occurences of each notes in the training set)
we then create an artificial input x that can be used by our model. Our model requires data x of shape (m, T_x, n_x). In our case
m=1 since we have only one sequence,
T_x should be the length used when training our model so it is model_T_x and
n_x is the number of notes.
we set the data at time t=0, x[0,0,:], to our random note (after converting it to a one-hot-encoding)
we then feed our model with this data. The model has been trained to predict  𝑝(𝑥<𝜏>|𝑥<1>,𝑥<2>,...𝑥<𝜏−1>) . The output of the model y is of shape (m, T_x, n_x). But only the first value is meaningfull so far. The output value y at t=0 is  𝑝(𝑥<1>|𝑥<0>) , i.e. the probability of each note to be the second note given our first note as input. Actually y at t=0 (noted y[0,0,:]) is a vector that represents the probability of each of the n_x notes given the one at t=0. We can then either
(a) get the most likely class from the vector y[0,0,:] (np.argmax) or
(b) consider the vector y[0,0,:] as a multinomial distribution and sample from it (np.random.multinomial). If the vector is too peaky (one of the probability is much larger than the other) we can flatten it using a temperature scaling (see below).
whathever (a) or (b), the selected note is now considered as the note at t=1. We therefore add it (after conversion to one-hot-encoding) to the input data  𝑥  at time t=1: x[0,1,:].
we then feed our model with this new x. The output of the model at t=1, y[0,1,:], is  𝑝(𝑥<2>|𝑥<0>,𝑥<1>) . We then either perform (a) or (b), plugs the new selected notes as the input  𝑥  at t=2, x[0,2,:], and repeat the process for the following times until we reach model_T_x.
To apply a temperature  𝑇  parameter to a discrete probability  {𝑝𝑐}𝑐∈{1,...,𝐾} , you can use
𝑝′𝑐=𝑒log(𝑝𝑐)/𝑇∑𝐾𝑘=1𝑒log(𝑝𝑘)/𝑇 
where  𝐾  is the number of classes.`}</p>
    <CodeCell codeString={`def F_get_max_temperature(proba_v, temperature=1):
    """
    apply a temperature to the input probability
    consider it as a multinomial distribution
    sample it

    Parameters
    ----------
    proba_v: np.array(n_x)
        input probability vector
    temperature: scalar float
        temperature parameters to apply to proba_v,
        >1 leads to more flatten probability,
        <1 leads to more peaky probability

    Returns
    -------
    index_pred: scalar int
        position of the sampled data in the probability vector
    pred_v: np.array(n_x)
        modified probability
    """

    if student:
        # --- START CODE HERE (05)


        proba_v = np.log(proba_v + 1e-10)
        proba_v /= temperature
        pred_v = np.exp(proba_v) / np.sum(np.exp(proba_v))

        index_pred = np.random.choice(len(pred_v), p=pred_v)

        # --- END CODE HERE

    return index_pred, pred_v`}/>
    <CodeCell codeString={`def F_sample_new_sequence(model, prior_v):
    """
    sample the trained language model to generate new data

    Parameters
    ----------
    model:
        trained language model

    Returns
    -------
    note_l: list of int
        list of generated notes (list of their index)
    prediction_l: list of np.array(n_x)
        list of prediction probabilies over time t (each entry of the list is one of the y[0,t,:])
    """

    if student:
        # --- START CODE HERE (06)

        note_l = []
        prediction_l = []

        index_pred = np.random.choice(n_x, p=prior_v)


        x = np.zeros((1, model_T_x, n_x))
        x[0, 0, index_pred] = 1


        for t in range(1, model_T_x):
            y = model(x)
            proba_v = y[0, t - 1, :]

            index_pred, proba_v = F_get_max_temperature(proba_v)

            prediction_l.append(proba_v)
            note_l.append(index_pred)

            x[0, t, :] = 0
            x[0, t, index_pred] = 1

        # --- END CODE HERE

    return note_l, prediction_l`}/>
    <h2>Display the generated sequence</h2>
    <CodeCell codeString={`if False:
    prior_v = np.ones(n_x)/n_x
else:
    sum_v = np.zeros(n_x)
    for X_ohe in X_list: sum_v += np.sum(X_list[0], axis=0)
    prior_v = sum_v/np.sum(sum_v)

note_l, prediction_l = F_sample_new_sequence(model, prior_v)

print(note_l)
plt.figure(figsize=(10, 6))
plt.imshow(np.asarray(prediction_l).T, aspect='auto', origin='lower')
plt.plot(note_l, 'ro')
plt.set_cmap('gray_r')
plt.grid(True)`}/>
    <img style={{ maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0' }} src="soundsequencegen.png"/>
    <h2>Create a MIDI file and an audio file which correspond to the generated sequence</h2>
    <p>Once the new sequence has been generated (note_l) we transform it to a new MIDI file and perform (a very cheap) rendering of it in an audio file.</p>
    <CodeCell codeString={`new_midi_data = pretty_midi.PrettyMIDI()
cello_program = pretty_midi.instrument_name_to_program('Cello')
cello = pretty_midi.Instrument(program=cello_program)
time = 0
step = 0.3
for note_number in note_l:
    myNote = pretty_midi.Note(velocity=100, pitch=note_number, start=time, end=time+step)
    cello.notes.append(myNote)
    time += step
new_midi_data.instruments.append(cello)
new_midi_data.write('output.mid')

%matplotlib inline
audio_data = new_midi_data.synthesize(fs=44100)
IPython.display.Audio(audio_data, rate=44100)`}/>

<h2> And let there be music! </h2>
<div className="code-wrapper">
      <div className="code-toolbar">
      <audio className="code-audio" controls>
        <source src="path_to_your_audio_file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
               <button className="copy-button" >
          Copy code
        </button>
      </div>
      <pre className="code-block">
        
      </pre>
    </div>
            </div>
          </div>

         {/* Right content (card with image, title, paragraph, and social media links) */}
<div className="right-content" style={{
    marginRight:'20px',
    flexBasis: '30%', 
    minWidth: '300px', 
    padding: "15px", 
    marginTop: "25px",
    position: 'sticky', /* Makes the element sticky */
    top: '20px' /* Distance from the top of the viewport when it becomes sticky */
}}>
    <div className="card" style={{
        padding: '20px',
        borderRadius: '0px',
        width: '100%',
    }}>
                <h2 style={{ marginTop: '15px', textAlign: 'left', padding: '15px' }}>By El Houssaine</h2>
        <p>Meet El Houssaine Chahboun, M2 master’s degree from Data Science from École Polytechnique (L'X), he brings a unique perspective to problem-solving and innovation across various fields.</p>
        <div className="social-links" style={{ marginTop: '20px', textAlign: 'left' }}>
            <a href="https://x.com/elhoussainechah" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Facebook</a>
            <a href="https://www.linkedin.com/in/elhoussainechahboun/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
        </div>
    </div>
</div>{/* Right content (card with image, title, paragraph, and social media links) */}

        </div>

        <br /><br /><br />




      
    

      

      <div class="linesection">
<Footer />
</div>
    </div>

  );
}

export default MyComponent;



