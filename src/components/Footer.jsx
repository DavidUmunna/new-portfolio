import React from "react";


const Footer=()=>{
    return (
        <div>
          <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
              <p>© {new Date().getFullYear()} David Umunna. All rights reserved.</p>
            </div>
          </footer>
        </div>
    )
}

export default Footer