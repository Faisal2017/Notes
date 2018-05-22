require 'fileutils'

def filter_directories

  excluded_directories = ["./bin"]

  all_files = Dir.glob('*')

  return all_files.select do |file| 
    next if excluded_directories.include?(file)
    File.directory?(file)
  end
end

# def create_bin
  # FileUtils.rm_rf('./bin')
  # FileUtils.mkdir_p('./bin')
# end

def run_tests directories
  dirList = ""
  for directory in directories
    puts "adding #{directory} files to command line"
    dirList += " #{directory}/*.cs "
    #system("cd ")
    #system ("mcs -out:./bin/WizardManagement.exe #{directory}/*.cs -reference:nunit.framework.dll")
  end
  puts "#{dirList}"
  system ("mcs -out:./Runner.exe #{dirList} -reference:nunit.framework.dll")
end

#create_bin()

valid_directories = filter_directories()

run_tests(valid_directories)

