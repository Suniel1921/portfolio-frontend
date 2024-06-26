import React from 'react';

const Blog = () => {
  return (
    <>
    
      <div className='container'>
        <h2>Steps to Host MERN App</h2>
        
        <h3>Access Your VPS:</h3>
        <p>Log in to your Hostinger account and access your VPS dashboard.</p>

        <h3>Connect to Your VPS:</h3>
        <p>You can connect to your VPS using SSH. Open a terminal on your local machine and use the following command, replacing &lt;your-username&gt; and &lt;your-vps-ip&gt; with your actual VPS details:</p>
        <pre><code>ssh &lt;your-username&gt;@&lt;your-vps-ip&gt;</code></pre>
        <img src="/img/" alt="Image 1" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <h3>Update and Upgrade:</h3>
        <p>Before installing any software, it's a good practice to update your VPS packages:</p>
        <pre><code>sudo apt update<br />sudo apt upgrade</code></pre>
        <p>
          <b>sudo:</b> sudo stands for "Superuser Do" or "Substitute User and Do." It is a command that allows users with the appropriate privileges to execute commands as the superuser (administrator) or another user, based on their configuration. This is often used for performing administrative tasks that require elevated permissions.
        </p>
        <p>
          <b>apt:</b> apt stands for "Advanced Package Tool." It is a command-line package management tool used in Debian-based Linux distributions, including Ubuntu. apt allows you to interact with the system's package manager to install, update, remove, or manage software packages.
        </p>
        <p>So, when you run <code>sudo apt update</code>, you are telling the system to refresh the package repository information, and when you run <code>sudo apt upgrade</code>, you are telling the system to upgrade your installed packages to their latest versions.</p>

        <h3>Install Node.js using NVM:</h3>
        <p>We are going to install using NVM (Node Version Manager)</p>
        <p>Go to NVM’s repo.</p>
        <img src="path/to/image2.jpg" alt="Image 2" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <p>
          <b>curl:</b> The name "curl" stands for "Client for URLs.” curl is a command-line tool and library for transferring data with URLs. curl allows you to send HTTP requests to web servers. You can use it to retrieve web pages, download files, send POST requests, and more.
        </p>
        <p>This command downloads and runs the NVM installation script. It will add NVM to your shell's configuration files (e.g., .bashrc or .zshrc). We need to reload our shell configuration to use NVM since we installed right now.</p>
        <p>After running, run <code>nvm --version</code> if you're not getting the expected output of the NVM version, it's possible that the nvm command is not recognized in your current shell session. This can happen if the shell session hasn't properly loaded the NVM script. Reconnect to your VPS might solve this issue.</p>
        <p>If it's still not working, you can manually run this command:</p>
        <img src="path/to/image3.jpg" alt="Image 3" style={{ marginBottom: '20px', marginTop: '20px' }} />
        
        <p>Once NVM is installed, you can install the desired version of Node.js. For example, to install the latest LTS (Long Term Support) version of Node.js, you can run:</p>
        <pre><code>nvm install --lts</code></pre>
        <img src="path/to/image4.jpg" alt="Image 4" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <p>Choose “Install on Linux” then choose your Linux distribution that your VPS is using. We are using Ubuntu VPS.</p>
        <img src="path/to/image5.jpg" alt="Image 5" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <p>There you will see some steps in “Install MongoDB Community Edition” section, follow that. For Ubuntu, there are 4 steps.</p>
        <p>Packages mentioned in Step 1 are installed by default in our VPS, so we can skip that.</p>
        <p>The name "curl" stands for "Client for URLs.” curl is a command-line tool and library for transferring data with URLs.</p>
        <img src="path/to/image6.jpg" alt="Image 6" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <p>This command installs MongoDB and its components.</p>
        <p>Whenever this type of prompt opens, press Enter. Also, the last 4th number command to install mongodb-org takes time. So, keep patience.</p>
        <p>
          <b>Extra Tips:</b> If you are wondering, "Jammy" is a codename for a version of the Ubuntu operating system. "Jammy" corresponds to Ubuntu 22.04, which is expected to be released in April 2022. Each Ubuntu release also has a version number that includes the year and month of the expected release, so "Ubuntu 22.04" means it's scheduled for release in April 2022.
        </p>

        <h3>Start and Enable MongoDB:</h3>
        <p>Once MongoDB is installed, start and enable the MongoDB service:</p>
        <pre><code>sudo systemctl start mongod<br />sudo systemctl enable mongod</code></pre>
        <p>If the above command is not working, check the status:</p>
        <pre><code>sudo systemctl status mongod</code></pre>
        <img src="path/to/image7.jpg" alt="Image 7" style={{ marginBottom: '20px', marginTop: '20px' }} />
        <p>For the first time, it will show inactive because we haven’t started our MongoDB.</p>
        <img src="path/to/image8.jpg" alt="Image 8" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <h3>Check Your Ubuntu Version:</h3>
        <pre><code>lsb_release -a</code></pre>
        <img src="path/to/image9.jpg" alt="Image 9" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <h3>Install Git:</h3>
        <p>You might need Git to clone your MERN application repository. Install it using:</p>
        <pre><code>sudo apt install git</code></pre>
        <p>After installing Git, if your GitHub repository is private, you might want to install GitHub CLI too. We need it for Ubuntu. So…</p>
        <img src="path/to/image10.jpg" alt="Image 10" style={{ marginBottom: '20px', marginTop: '20px' }} />
        <img src="path/to/image11.jpg" alt="Image 11" style={{ marginBottom: '20px', marginTop: '20px' }} />
        <img src="path/to/image12.jpg" alt="Image 12" style={{ marginBottom: '20px', marginTop: '20px' }} />
        
        <p>After GitHub CLI is installed, use this command and follow the steps mentioned to automatically set up everything required for authentication:</p>
        <pre><code>gh auth login</code></pre>
        <img src="path/to/image13.jpg" alt="Image 13" style={{ marginBottom: '20px', marginTop: '20px' }} />
        <img src="path/to/image14.jpg" alt="Image 14" style={{ marginBottom: '20px', marginTop: '20px' }} />
        <img src="path/to/image15.jpg" alt="Image 15" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <h3>Clone Your Repository (MERN Application):</h3>
        <p>Use Git to clone your MERN application's repository into a directory on your VPS.</p>
        <pre><code>git clone &lt;github-repo&gt;<br />cd &lt;your-project-folder&gt;</code></pre>

        <h3>Setup backend:</h3>
        <p>Now, let’s start with the backend. Go inside your backend or server folder and install all dependencies:</p>
        <pre><code>npm install<br />yarn install<br />pnpm install<br />bun install</code></pre>
        <p>We are using pnpm in our project, so first we need to install pnpm and then install dependencies:</p>
        <pre><code>npm i -g pnpm<br />pnpm i<br />ls</code></pre>
        <p>Output:</p>
        <img src="path/to/image16.jpg" alt="Image 16" style={{ marginBottom: '20px', marginTop: '20px' }} />

        <h3>Environment Setup:</h3>
        <p>We need to set up the environment variables. Create a .env file in your backend folder and add your variables:</p>
        <pre><code>touch .env<br />nano .env</code></pre>
        <p>Add your environment variables in the .env file.</p>
        <pre><code>PORT=5000<br />MONGO_URI=mongodb://localhost:27017/your_db_name</code></pre>
        <p>Once done, save the file (Ctrl + O, Enter, Ctrl + X).</p>

        <h3>Start Backend Server:</h3>
        <p>Now, start your backend server:</p>
        <pre><code>pnpm run start</code></pre>
        <p>Ensure the server is running correctly.</p>

        <h3>Frontend setup:</h3>
        <p>Now, we need to set up the frontend as well. Go to the client folder:</p>
        <pre><code>cd ..<br />cd client<br />pnpm i</code></pre>
        <p>Build the frontend code using the build command:</p>
        <pre><code>pnpm build</code></pre>
        <p>React builds the production code in the build folder.</p>

        <h3>Setup NGINX:</h3>
        <p>To serve our built application, we need to set up NGINX. First, install NGINX:</p>
        <pre><code>sudo apt install nginx</code></pre>
        <p>When the installation is complete, start and enable the NGINX service:</p>
        <pre><code>sudo systemctl start nginx<br />sudo systemctl enable nginx</code></pre>
        <p>Create a new configuration file for your app:</p>
        <pre><code>sudo nano /etc/nginx/sites-available/mern-app</code></pre>
        <p>Add the following configuration to the file:</p>
        <pre><code>
server &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;listen 80;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;server_name your_domain_or_ip;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;root /path/to/your/mern-app/client/build;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;location / &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try_files $uri /index.html;<br />
  &#125;<br />
&#125;
        </code></pre>
        <p>Save and close the file (Ctrl + O, Enter, Ctrl + X). Then create a symbolic link to enable the configuration:</p>
        <pre><code>sudo ln -s /etc/nginx/sites-available/mern-app /etc/nginx/sites-enabled/</code></pre>
        <p>Test the NGINX configuration:</p>
        <pre><code>sudo nginx -t</code></pre>
        <p>If the test is successful, restart NGINX:</p>
        <pre><code>sudo systemctl restart nginx</code></pre>
        <p>Your MERN app should now be running and accessible at your server's domain or IP address.</p>
      </div>
    </>
  );
};

export default Blog;
